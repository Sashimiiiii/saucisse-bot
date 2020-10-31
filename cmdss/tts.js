const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");
var googleTTS = require('google-tts-api');

module.exports = {
	name: 'tts',
	description: "s!tts [le texte]",
}


module.exports.run = async (bot, message,) => {

    var user = message.author.tag

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
    var prefix = "s!tss" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toUpperCase();
        var nom = command;
 
googleTTS(nom, 'fr', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
    const dispatcher = connection.play(url, {
        volume: 0.5,
    });
    console.log("[TTS] " + user + " à tts: " + nom)
})




}else {
    message.reply('Il faut etre dans le : channel vocal');
}
}



        
module.exports.help = {
    name: "tts"
}
