const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");



module.exports = {
	name: 'caramel',
	description: "Joue caramelldansen",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    var n=0;
    
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/sorcier.mp3', {
            volume: 0.1,
        });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
}
        
module.exports.help = {
    name: "caramel"
}

