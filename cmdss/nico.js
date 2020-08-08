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
        var couteau = new Discord.Message()
        if(message.member.roles.find("name", "Producteur en chef")){
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