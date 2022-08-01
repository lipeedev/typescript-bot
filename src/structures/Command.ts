import { BotClient } from '../Client';
import { Awaitable, ChatInputCommandInteraction, ChatInputApplicationCommandData } from 'discord.js';

export type OptionsExecute = { interaction: ChatInputCommandInteraction };

export abstract class Command {
    client: BotClient;
    data: ChatInputApplicationCommandData;

    constructor(client: BotClient, data: ChatInputApplicationCommandData) {
        this.data = data;
        this.client = client;
    }

    execute({ interaction }: OptionsExecute): Awaitable<any> {
        return { interaction };
    }

}
