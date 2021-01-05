const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'papopi',
	description: "ScAtMaN wOlRd",
}


module.exports.run = async (bot, message, args) => {
  

    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/papopi.mp3', {
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
       
            channel.send("[PAPOPI] " + user + " a utiliser Papopi | " + time + " Le " + date);
        }
    

                                                        }
module.exports.help = {
    name: "papopi"
}
