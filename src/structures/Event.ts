import type { Awaitable } from 'discord.js';
import type { BotClient } from '../Client';

export abstract class Event {
    name!: string;

    execute(client: BotClient, ...args: unknown[]): Awaitable<any> {
        return { client, args };
    }
}
