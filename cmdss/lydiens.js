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
        if(message.author.id === '87602865064927232') {
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