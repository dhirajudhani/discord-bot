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
client.on('ready', (c) => {
  console.log(`bOT IS READY TO CHAT`)
})
//eventlistner using .on
client.on("messageCreate", (message) => {
    if(message.author.bot) return;
  message.reply({
    content: "Hii I am bot"
  })
});

client.on('interactionCreate', interaction => {
   if(interaction.commandName === 'ping'){
    interaction.reply("Pong!");
   }
   if(interaction.commandName === 'hey'){
    interaction.reply("Hey! How you doing");
   }
})

client.login(process.env.TOKEN);
