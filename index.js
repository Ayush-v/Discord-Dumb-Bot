const dotenv = require("dotenv");
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
// const { token } = require("./config.json");

dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    console.log(interaction.guild);
    await interaction.reply(`Server name:`);
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    );
  } else if (commandName === "create") {
    await interaction.reply("yes its working you did it");
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
