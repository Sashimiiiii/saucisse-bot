const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require("ytdl-core");
var ffmpeg = require('ffmpeg');



module.exports = {
	name: 'play [URL]',
	description: "Pour jouer lien YT",
}


module.exports.run = async (bot, message) => {
  

    message.delete();

    var prefix = "s!play2" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const url = args.shift().toString();

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        connection.play(ytdl(url, {
            volume: 0.0,
        }));
     

    }else {
        message.reply('Il faut etre dans le : channel vocal');
        }

        
}


        
module.exports.help = {
    name: "play2"
}

