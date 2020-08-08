const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'adieu',
	description: 'Envoie la tragedie de theSkyKid67',
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var couteau = new Discord.Message()
        message.channel.send("Voila la vidéo de la tragedie de theSkyKid67 : https://youtu.be/gy_7hP1R_uU")
        } 
    }
}

module.exports.help = {
    name: "adieu"
}