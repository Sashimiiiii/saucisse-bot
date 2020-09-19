const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    var n=0;
    
        voiceChannel.join().then(connection => {
        console.log("joined channel");
        const dispatcher = connection.playFile('./sons/caramel.mp3');
        dispatcher.setVolume(2.1);
        dispatcher.on("end", end => {

            console.log("bot join");}
        
        );}
        
    ).catch(err => console.log(err));
    isReady = true}
        

        
module.exports.help = {
    name: "join"
}
