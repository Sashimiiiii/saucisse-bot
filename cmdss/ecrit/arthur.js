const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'arthur',
	description: "Envoie la vidéo d'Arthur contre le dragon playmobile",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.send("Voila la bataille contre le dragon playmobile :https://www.youtube.com/watch?v=ffchuRROZ_A")
        } 
    }
}

module.exports.help = {
    name: "arthur"
}