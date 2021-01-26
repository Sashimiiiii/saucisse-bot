const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'nico',
	description: 'la commande de NICO',
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        //if(message.member.roles.cache.some(r => r.name === "Producteur en chef")) {
            if(message.author.id === '188304318338695168' ) {
            message.channel.send("wesh nico bien ou bien").then(sentMessage => {
                sentMessage.react('668492192649576490');
            });
          }
        
        else{
           message.channel.send("tg tu pas etre nico")
        }
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[NICO] " + user + " a utiliser Nico | " + time + " Le " + date);
        }
        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[NICO] " + user + " a utiliser Nico | " + time + " Le " + date);
}

module.exports.help = {
    name: "nico"
}