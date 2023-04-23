
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: '',
	description: "",
}


module.exports.run = async (bot, message,) => {
    message.delete();

    if (!message.guild.me.hasPermission("SPEAK")) {
        message.channel.send("j'ai pas les permissions :(")
        return;
    }

    var prefix = "s!ttt" ;
        //const args = message.content.slice(prefix.length).trim().split('/ +/');
        var args = message.content.split(' ');
        var Text = args.slice(4);

        const command = Text.join(' ').toString();
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
        voice: 'fr'
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();


    var channel = bot.guilds.cache.get(args[1]).channels.cache.get(args[2])
    const connection = await channel.join();
    setTimeout(() => {
       
        
        const dispatcher = connection.play('./hello-world.mp3', {
            volume: 0.5,
        });
        dispatcher.on('finish', () => {
            fs.rename('hello-world.mp3', 'old.mp3', err => {
                if (err) {
                  return console.error(err)
                }
            })
        });
    }, 1000);


    
    const channelLog = message.guild.channels.cache.get("795755947879825408")
        var user = args[3]
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        
        
            channelLog.send("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date);
        
    
    bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date);
}
        
module.exports.help = {
    name: "ttt2"
}
