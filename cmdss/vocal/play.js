const Discord = require('discord.js');
const fs = require('fs');
var ytdl = require("ytdl-core-discord");



module.exports = {
	name: 'play [URL]',
	description: "Pour jouer lien YT",
}


module.exports.run = async (bot, message, args) => {
  


    message.delete();

    
    if (message.member.voice.channel) {
        var prefix = "s!play" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const url = args.shift().toString();
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(await ytdl(url), { 
            type: 'opus',
            volume: 0.05, 
        
        });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
}
        
module.exports.help = {
    name: "play"
}

