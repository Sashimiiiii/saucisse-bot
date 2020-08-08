const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'biblia',
	description: "biblia",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`Ce mec est un linguiste occitan`)
        .setColor('#ff0000')
        .setImage("https://media.discordapp.net/attachments/730527992148656211/739902753563738182/received_3263177790387217.jpeg");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "biblia"
}
