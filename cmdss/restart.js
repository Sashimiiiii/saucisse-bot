const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'restart',
	description: "restart le bot",
}

module.exports.run = async (bot, message, args) => {
if (message.author.id != '188304318338695168')
{
   return message.channel.send("t'as pas les perms mec") 
}
 await console.log("Redémarage...")
process.exit()
}
module.exports.help = {
    name: "restart"
}