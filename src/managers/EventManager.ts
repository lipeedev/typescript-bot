import type { BotClient } from '../Client';
import type { Event } from '../structures';
import { readdir } from 'node:fs/promises';

type eventClassTarget = {
    default: new () => Event;
};

export class EventManager {
    client: BotClient;

    constructor(client: BotClient) {
        this.client = client;
    }

    async loadEvents() {
        const events = (await readdir('./events/')).filter(e => e.endsWith('.js'));
        for await (const eventName of events) {
            const { default: EventClass }: eventClassTarget = await import(`../events/${eventName}`);
            const eventObj = new EventClass();
            this.client.on(eventObj.name, (...args) => eventObj.execute(this.client, ...args));
        }

        await this.client.logger.loadEvents(events);
    }
}
