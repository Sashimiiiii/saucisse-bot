const Discord = require('discord.js');
const fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');


module.exports = {
	name: 'testm',
	description: "...",
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        
        ffmpeg()  
        .input('./microonde.gif')
        .input('./sons/microonde.mp3')
        .save('./microonde.mp4')

        setTimeout(() => {

          (message.channel.send({ files: ["./microonde.mp4"]}));
          
      }, 1000); 
        
        
        
 //      const channel = message.guild.channels.cache.get("795755947879825408")
 //      var user = message.author.tag
 //      var today = new Date();
 //      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 //      var date = today.getDate()+'/'+(today.getMonth()+1);
 //      
 //      if (message.guild.id == 730433603808264192) {
 //          channel.send("[NOU] " + user + " a utiliser nou | " + time + " Le " + date);
 //      }

 //      bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[NOU] " + user + " a utiliser nou | " + time + " Le " + date);

    
}

module.exports.help = {
    name: "testm"
}
