const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'join',
	description: "Fait rejoindre le bot en vocal",
}

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/bonjour.mp3');
    dispatcher.setVolume(0.1);
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "join"
}
