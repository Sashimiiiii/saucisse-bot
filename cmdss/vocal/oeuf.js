const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'oeuf',
	description: "monsieur oeuf",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/Monsieur Oeuf.mp3', {
            volume: 0.5,
        });

        //dispatcher.setVolume(0.1);
        //dispatcher.on("end", end => {
          //  console.log("left channel");

      } else {
        message.reply('Il faut etre dans le : channel vocal');
    
    }
    
    
    

        }
module.exports.help = {
    name: "oeuf"
}