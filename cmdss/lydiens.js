const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'lydiens',
	description: 'la commande de Lydiens',
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        if(message.member.roles.find("name", "Petit père de la SRU")){
            message.channel.send("wesh lydiens bien ou bien").then(sentMessage => {
                sentMessage.react('668492192649576490');
            });
          }
        
        else{
           message.channel.send("tg tu pas etre lydiens")
        }
        } 
    }
}

module.exports.help = {
    name: "lydiens"
}