const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'leave',
	description: "Fait partir le bot du vocal mais c'est pas tres sympa pour lui",
}

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.leave();
        const dispatcher = connection.play('./sons/o revoir.mp3');
        dispatcher.on('finish', () => {
            console.log('Finished playing!');
            connection.leave();
          });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
    

    

        }}
module.exports.help = {
    name: "leave"
}