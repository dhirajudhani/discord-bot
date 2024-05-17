import { Client, GatewayIntentBits, messageLink } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
  message.reply({
    content: "Hii I am bot"
  })
});

client.login(
);
