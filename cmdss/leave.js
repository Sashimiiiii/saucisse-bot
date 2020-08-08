const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'leave',
	description: "Fait partir le bot du vocal mais c'est pas tres sympa pour lui",
}

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/o revoir.mp3');
    dispatcher.on("end", end => {
        console.log("left channel");
        voiceChannel.leave();
    });
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "leave"
}