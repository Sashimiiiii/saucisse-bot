const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'nico',
	description: 'la commande de NICO',
}

module.exports.run = async (bot, message, args) => {

    {
{
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
        } 
    }
}

module.exports.help = {
    name: "nico"
}