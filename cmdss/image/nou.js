const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'nou',
	description: "nou",
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        var couteau = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setImage("https://media.discordapp.net/attachments/730768784062939176/739894545973510164/received_1694695357353857.jpeg");
        message.channel.send(couteau)
        
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        
        if (message.guild.id == 730433603808264192) {
            channel.send("[NOU] " + user + " a utiliser nou | " + time + " Le " + date);
        }

        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[NOU] " + user + " a utiliser nou | " + time + " Le " + date);

    
}

module.exports.help = {
    name: "nou"
}
