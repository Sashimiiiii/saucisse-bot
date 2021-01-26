const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'biblia',
	description: "biblia",
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        var couteau = new Discord.RichEmbed()
        .setAuthor(`Ce mec est un linguiste occitan`)
        .setColor('#ff0000')
        .setImage("https://media.discordapp.net/attachments/730527992148656211/739902753563738182/received_3263177790387217.jpeg");
        message.channel.send(couteau)
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
            console.log("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date)
            
            channel.send("[BIBLIA] " + user + " a utiliser Biblia | " + time + " Le " + date);
        }
    
        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[BIBLIA] " + user + " a utiliser Biblia | " + time + " Le " + date);
}

module.exports.help = {
    name: "biblia"
}
