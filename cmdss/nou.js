const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'nou',
	description: "nou",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setImage("https://media.discordapp.net/attachments/730768784062939176/739894545973510164/received_1694695357353857.jpeg");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "nou"
}
