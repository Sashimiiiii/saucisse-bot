const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'lego',
	description: "HEY",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection => {
    console.log("joined channel");
    const dispatcher = connection.playFile('./sons/A_Man_Has_Fallen_Into_The_River_In_Lego_City_Commercial.mp3');
    
}).catch(err => console.log(err));
isReady = true
        }
module.exports.help = {
    name: "lego"
}