const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'sorcier',
	description: "c pa sorcier",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/sorcier.mp3', {
            volume: 0.1,
        });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[SORCIER] " + user + " a utiliser Sorcier | " + time + " Le " + date);
        }

        }
module.exports.help = {
    name: "sorcier"
}