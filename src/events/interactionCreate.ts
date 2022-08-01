import type { Interaction } from 'discord.js';
import { OptionsExecute, Event } from '../structures';
import type { BotClient } from '../Client';

export default class InteractionCreate extends Event {
    name: string;

    constructor() {
        super();
        this.name = 'interactionCreate';
    }

    execute(client: BotClient, interaction: Interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.getCommand(interaction.commandName);
        command?.execute({ interaction } as OptionsExecute);
    }
}
