const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'lydiens',
	description: 'la commande de Lydiens',
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        if(message.author.id === '87602865064927232') {
            message.channel.send("wesh lydiens bien ou bien").then(sentMessage => {
                sentMessage.react('668492192649576490');
            });
          }
        
        else{
                message.channel.send("tg tu pas etre lydiens")
            }
        
            
            
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
            
            if (message.guild.id == 730433603808264192) {
                channel.send("[LYDIENS] " + user + " a utiliser LYDIENS | " + time + " Le " + date);
            }
            bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[LYDIENS] " + user + " a utiliser LYDIENS | " + time + " Le " + date);
}

module.exports.help = {
    name: "lydiens"
}