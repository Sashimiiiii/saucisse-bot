const Discord = require('discord.js');
const fs = require('fs');
var ytdl = require("ytdl-core");

module.exports = {
	name: 'play [url]',
	description: "Basiquement son youtube",
}

module.exports.run = async (bot, message, args) => {
  

    var channel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=-JH5nhcxSyE', {
            volume: 0.3,
        }));

      } else {
        message.reply('Il faut etre dans le : channel vocal');
    
    
    

        }
    }
module.exports.help = {
    name: "play"
}
