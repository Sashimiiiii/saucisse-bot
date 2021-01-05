const Discord = require('discord.js');
const fs = require('fs');
const { isNullOrUndefined } = require('util');

module.exports = {
	name: 'h [texte]',
	description: "Pour faire parler le bot",
}

module.exports.run = async (bot, message,) => {

    

        message.delete();
        var couteau = new Discord.Message()
        var prefix = "s!h" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
       
        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
                
    
        message.channel.send(args[0]);
        
        
        
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[H] " + user + " à écrit: " + args[0] + " | " + time + " Le " + date)
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")          
       
            channel.send("[H] " + user + " à écrit: " + args[0] + " | " + time + " Le " + date);
        }
    
        
    }

module.exports.help = {
    name: "h"
}