import { Command, OptionsExecute } from '../../structures';
import type { BotClient } from '../../Client';
import { ApplicationCommandType } from 'discord.js';

export default class PingCommand extends Command {
    constructor(client: BotClient) {
        super(client, {
            name: 'ping',
            description: 'Shows the bot ping.',
            type: ApplicationCommandType.ChatInput,
        });
    }

    execute({ interaction }: OptionsExecute) {
        interaction.reply({ content: `My ping is \`${this.client.ws.ping}\`ms` });
    }
}
