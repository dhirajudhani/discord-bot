import dotenv from "dotenv";
import {
  Client,
  GatewayIntentBits,
  messageLink,
  IntentsBitField,
  EmbedBuilder,
} from "discord.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", (c) => {
  console.log(`bOT IS READY TO CHAT`);
});
//eventlistner using .on
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hii I am bot",
  });
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
  if (interaction.commandName === "hey") {
    interaction.reply("Hey! How you doing");
  }
  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum is ${num1 + num2} `);
  }
  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed title")
      .setDescription("This is a embed description")
      .setColor('Random')
      .addFields({
        name: "Field title",
        value: "Some random value",
        inline: true
      },
      {
        name: "2nd Field title",
        value: "Some random value",
        inline: true
      })
      .setURL('https://discord.js.org/')
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    interaction.reply({embeds : [embed]})
  }

  if(interaction.isButton()){

    const role = interaction.guild.roles.cache.get(interaction.customId);
    if(!role){
      interaction.reply({
        content: "I couldn't find that role",
        ephemeral: true
      })
      return;
    }
    const hasRole = interaction.member.roles.cache.has(role.id);
    if(hasRole){
        interaction.member.roles.remove(role);
        interaction.editReply(`The role ${role} has been removed`)
        return
    }
    interaction.member.roles.add(role)
    interaction.editReply(`The role ${role} has been added`)
  }
});

client.login(process.env.TOKEN);
