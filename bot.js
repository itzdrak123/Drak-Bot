const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// THIS MUST BE THIS WAY
Client.login(process.env.BOT_TOKEN);
