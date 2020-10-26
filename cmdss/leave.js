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
        var connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/o revoir.mp3');
        dispatcher.on('finish', () => {
            message.member.voice.channel.leave();
          });
       
        
      } else {
        message.reply('Il faut etre dans le : channel vocal');
    

    

        }}
module.exports.help = {
    name: "leave"
}
