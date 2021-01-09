const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require("ytdl-core");



module.exports = {
	name: 'play [URL]',
	description: "Pour jouer lien YT",
}


module.exports.run = async (bot, message) => {
  

    message.delete();
    if (!bot.user.hasPermission("MANAGE_ROLES")) {
        message.channel.send("j'ai pas les permissions :(")
    }

    var prefix = "s!play" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const url = args.shift().toString();

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        connection.play(ytdl(url,{filter : 'audioonly'}));
     

    }else {
        message.reply('Il faut etre dans le : channel vocal');
        }

        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[PLAY] " + user + " a utiliser Play | " + time + " Le " + date);
        }

}


        
module.exports.help = {
    name: "play"
}

