import dotenv from 'dotenv'
import { Client, GatewayIntentBits, messageLink, IntentsBitField  } from "discord.js";

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//eventlistner using .on
client.on("messageCreate", (message) => {
    if(message.author.bot) return;
  message.reply({
    content: "Hii I am bot"
  })
});

client.on('interactionCreate', interaction => {
    interaction.reply("Pong!!")
})

client.login(process.env.TOKEN);
