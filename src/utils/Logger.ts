import { BotClient } from '../Client';

export class Logger {
    client: BotClient;

    constructor(client: BotClient) {
        this.client = client;
    }

    loadEvents(events: string[]): void {
        const mappedEvents = events.map(ev => ({ event: ev.replace('.js', '') }));

        console.table(mappedEvents);
        console.log(`\x1b[33m[${events.length} EVENTS LOADED]\x1b[0m\n\n`);
    }

    loadCommands(commands: string[]): void {
        const mappedCommands = commands.map(cmd => ({ command: cmd.replace('.js', '') }));

        console.table(mappedCommands);
        console.log(`\x1b[33m[${commands.length} COMMANDS LOADED]\x1b[0m\n\n`);
    }

    registerCommands() {
        console.log(`\x1b[34m[${this.client.commands.manager.size} COMMANDS SENT TO DISCORD]\x1b[0m\n\n`);
    }

    loadClient(): void {
        console.log(`\x1b[32m[CLIENT CONNECTED]\x1b[0m running in ${this.client.guilds.cache.size} guilds.`);
    }
}


