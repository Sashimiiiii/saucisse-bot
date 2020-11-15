const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");



module.exports = {
	name: 'caramel',
	description: "Joue caramelldansen",
}


module.exports.run = async (bot, message, args) => {
  


    message.delete();

    
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/caramel.mp3', {
            volume: 0.1,
        });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
}
        
module.exports.help = {
    name: "caramel"
}

