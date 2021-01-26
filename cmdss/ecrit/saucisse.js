const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'saucisse',
	description: "Envoie l'image de la saucisse",
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        var couteau = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setImage("https://cdn.discordapp.com/attachments/719185634815770674/722841188209524757/17311212-dessin-animC3A9-saucisse-pouces-vers-le-haut.png");
        message.channel.send(couteau)
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[SAUCISSE] " + user + " a utiliser Saucisse | " + time + " Le " + date);
        }
        var user = message.author.tag
        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[SAUCISSE] " + user + " a utiliser Saucisse | " + time + " Le " + date);
}

module.exports.help = {
    name: "saucisse"
}