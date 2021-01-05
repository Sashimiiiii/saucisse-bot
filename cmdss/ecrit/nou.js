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
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[NOU] " + user + " a utiliser nou | " + time + " Le " + date);
        }

    
}

module.exports.help = {
    name: "nou"
}
