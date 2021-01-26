const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'reyax',
	description: 'la commande de Reyax',
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        if(message.author.id === '253992258674753557') {
            message.channel.send("tg reyax").then(sentMessage => {
                sentMessage.react('668492192649576490');
            });
          }
        
        else{
           message.channel.send("tg tu pas etre reyax")
        }
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[REYAX] " + user + " a utiliser Reyax | " + time + " Le " + date);
        }

        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[REYAX] " + user + " a utiliser Reyax | " + time + " Le " + date);
    
}

module.exports.help = {
    name: "reyax"
}