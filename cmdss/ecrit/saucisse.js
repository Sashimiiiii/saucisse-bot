const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'saucisse',
	description: "Envoie l'image de la saucisse",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setImage("https://cdn.discordapp.com/attachments/719185634815770674/722841188209524757/17311212-dessin-animC3A9-saucisse-pouces-vers-le-haut.png");
        message.channel.send(couteau)
        } 
    }
}

module.exports.help = {
    name: "saucisse"
}
