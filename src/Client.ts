import { Client, GatewayIntentBits, ActivityType, Partials } from 'discord.js';
import { EventManager, CommandManager } from './managers';
import { Logger } from './utils/Logger';

export class BotClient extends Client {
    events: EventManager;
    commands: CommandManager;
    logger: Logger;

    constructor() {
        super({
            allowedMentions: { repliedUser: false },
            failIfNotExists: false,
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildPresences
            ],
            ws: { properties: { browser: 'Discord iOS' } },
            presence: {
                status: process.env.ENV === 'dev' ? 'idle' : 'online',
                activities: [{
                    name: process.env.ENV === 'dev' ? 'in development...' : '/help to see my commands',
                    type: process.env.ENV === 'dev' ? ActivityType.Watching : ActivityType.Playing
                }]
            },
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.Reaction,
                Partials.User
            ]
        });

        this.logger = new Logger(this);
        this.events = new EventManager(this);
        this.commands = new CommandManager(this);
    }

    async start() {
        await super.login(process.env.BOT_TOKEN);
        await this.events.loadEvents();
        await this.commands.loadCommands(this);
        if (process.env.ENV === 'dev') await this.commands.registerCommands();
    }

}
