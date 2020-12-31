
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: 'tts2',
	description: "pareil que au dessus mais ça met dans vocal among us",
}


module.exports.run = async (bot, message,) => {
    message.delete();

    var prefix = "s!tts2" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toString();
        var nom = command;
	var stringLength = nom.length;
if (stringLength > 199) {
    message.reply("message etre comme : plus de 200 caractères = pas bien");
    return;
}	

// notice that `tts.synthesize` returns a Promise<Buffer>
const saveFile = async () => {
    const buffer = await tts.synthesize({
        text: nom,
        voice: 'fr-FR'
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();

    const connection = await bot.channels.cache.get("756241429923102751");
    setTimeout(() => {
       
        connection.join().then(connection => {
        const dispatcher = connection.play('./hello-world.mp3', {
            volume: 0.5,
        });
        dispatcher.on('finish', () => {
            fs.rename('hello-world.mp3', 'old.mp3', err => {
               
            })
        });
    })
    }, 1000);
   



    var user = message.author.tag
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[TTS2] " + user + " a tts: " + nom + " | " + time + " Le " + date)
}
        
module.exports.help = {
    name: "tts2"
}
