
//Environment Setups & Imports
require('dotenv').config();
const fs = require('fs');
const path = require('path'); // Added for better path handling
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Load commands
client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands'); // Better path resolution
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// ADD THIS MISSING LOOP
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Loaded ${client.commands.size} commands!`); // Verify loading
});

client.on('messageCreate', message => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error executing that command.');
  }
});

client.login(process.env.DISCORD_TOKEN);