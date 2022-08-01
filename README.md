# Typescript Discord Bot
_A simple discord.js template bot written with Typescript._

## Setting up
* Follow the [Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html) to create a new application

* Clone this repository with the following commands:

```bash
git clone https://github.com/1Leep/typescript-bot.git
cd typescript-bot/
```

* Rename the `.env.example` to `.env` and enter the values.
    * To register the commands, change the value of the ENV key to `dev`, or `prod` to get into production. 

```env
BOT_TOKEN=YOUR_TOKEN_HERE
ENV=dev
```

## Scripts

**Installing the dependencies:**
| Package Manager |   Command      | 
| :------         |  :-------:     |         
| `Npm`           | `npm install`  | 
| `Yarn`          | `yarn install` |
| `Pnpm`          | `pnpm install` | 


**Transpiling The files:**
| Package Manager |   Command         | 
| :------         |  :-------:        |         
| `Npm`           | `npm run build`   | 
| `Yarn`          | `yarn build`      |
| `Pnpm`          | `pnpm run build`  | 

**Running the bot:**
| Package Manager |   Command       | 
| :------         |  :-------:      |         
| `Npm`           | `npm start`     | 
| `Yarn`          | `yarn start`    |
| `Pnpm`          | `pnpm start`    | 

##

**List of all scripts:**

- `build`: Builds the application
- `fix`: Lint and fix the source files
- `clean`: Cleans the `dist` directory
- `start`: Builds and start the application

