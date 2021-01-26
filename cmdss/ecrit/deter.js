const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'deter',
	description: 'mrc deter',
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();

        message.channel.send("merci à saucisse deter pour : existe");
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[DETER] " + user + " a utiliser Deter | " + time + " Le " + date);
        }
    
        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[DETER] " + user + " a utiliser Deter | " + time + " Le " + date);
}

module.exports.help = {
    name: "deter"
}