import { BotClient } from '../Client';
import { readdir } from 'node:fs/promises';
import { Collection, ChatInputApplicationCommandData } from 'discord.js';
import { Command } from '../structures';

type commandClassTarget = {
    default: new (_client: BotClient) => Command;
};

export class CommandManager {
    client: BotClient;
    manager: Collection<string, Command>;

    constructor(client: BotClient) {
        this.client = client;
        this.manager = new Collection();
    }

    async loadCommands(client: BotClient): Promise<void> {
        const commandFolders = await readdir('./commands/');

        for await (const folder of commandFolders) {
            const commands = (await readdir(`./commands/${folder}/`)).filter(cmd => cmd.endsWith('.js'));

            for await (let command of commands) {
                command = command.replace('.js', '');
                const { default: CommandClass }: commandClassTarget = await import(`../commands/${folder}/${command}`);
                const cmdObj = new CommandClass(client);
                this.manager.set(command, cmdObj);
            }

            client.logger.loadCommands(commands);
        }
    }

    async registerCommands(): Promise<void> {
        const commands = this.manager.map(cmd => cmd.data) as ChatInputApplicationCommandData[];
        await this.client.application?.commands.set(commands);
        this.client.logger.registerCommands();
    }

    getCommand(name: string): Command | undefined {
        return this.manager.get(name);
    }

}
