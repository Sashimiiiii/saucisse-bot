const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'chant',
	description: "Xue Hua Piao Piao Best Part",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/Xue Hua Piao Piao Best Part.mp3');
    dispatcher.setVolume(0.1);
    dispatcher.on("end", end => {
        console.log("left channel");
    });
    
    
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "chant"
}