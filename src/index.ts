import { BotClient } from './Client';
import { config } from 'dotenv';

config({ path: '../.env' });

new BotClient().start();
