
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: 'tts',
	description: "s!tts (le texte)",
}


module.exports.run = async (bot, message,) => {
    message.delete();

    var prefix = "s!tts" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toString();
        var nom = command;

// notice that `tts.synthesize` returns a Promise<Buffer>
const saveFile = async () => {
    const buffer = await tts.synthesize({
        text: nom,
        voice: 'fr-FR'
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();

if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    setTimeout(() => {
       
        
        const dispatcher = connection.play('./hello-world.mp3', {
            volume: 0.5,
        });
    }, 1000);
}else {
    message.reply('Il faut etre dans le : channel vocal');
}


var user = message.author.tag
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date)

}
        
module.exports.help = {
    name: "tts"
}