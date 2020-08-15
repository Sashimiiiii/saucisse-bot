const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'reyax',
	description: 'la commande de Reyax',
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        if(message.member.roles.find("name", "Community Manager")){
            message.channel.send("tg reyax").then(sentMessage => {
                sentMessage.react('668492192649576490');
            });
          }
        
        else{
           message.channel.send("tg tu pas etre reyax")
        }
        } 
    }
}

module.exports.help = {
    name: "reyax"
}