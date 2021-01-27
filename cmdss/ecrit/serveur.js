const Discord = require('discord.js');
const fs = require('fs');
const { send } = require('process');

module.exports = {
	name: 'serveur',
	description: 'Pour savoir  dans combien de serveur est le bot',
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        message.channel.send("Le bot est dans **" + bot.guilds.cache.size + "** serveurs")
   
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        
        if (message.guild.id == 730433603808264192) {
            channel.send("[SERVEUR] " + user + " a utiliser Serveur | " + time + " Le " + date);
        }

        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[SERVEUR] " + user + " a utiliser Serveur | " + time + " Le " + date);
    
}

module.exports.help = {
    name: "serveur"
}