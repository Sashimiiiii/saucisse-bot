const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'papopi',
	description: "ScAtMaN wOlRd",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/papopi.mp3');
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
   
    

        }
module.exports.help = {
    name: "papopi"
}
