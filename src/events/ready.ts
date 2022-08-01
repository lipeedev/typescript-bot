import { BotClient } from '../Client';
import { Event } from '../structures';

export default class Ready extends Event {
    name: string;

    constructor() {
        super();
        this.name = 'ready';
    }

    async execute(client: BotClient) {
        await client.logger.loadClient();
    }
}
