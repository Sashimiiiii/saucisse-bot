const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'stop',
	description: "Fait fermer sa sale gueule au bot",
}

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/stop.mp3');
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }

        }
module.exports.help = {
    name: "stop"
}