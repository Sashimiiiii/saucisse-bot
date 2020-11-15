var googleTTS = require('google-tts-api');

module.exports = {
	name: 'tts2',
	description: "pareil que au dessus mais ça met dans vocal among us",
}


module.exports.run = async (bot, message,) => {
    message.delete();
    var user = message.author.tag

        const connection = await bot.channels.cache.get("756241429923102751");
    var prefix = "s!tts2" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toString();
        var nom = command;
 
googleTTS(nom, 'ja', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
    connection.join().then(connection => {
        const dispatcher = connection.play(url, {
            volume: 0.5,
        });
    })
    
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[TTS3] " + user + " a tts: " + nom + " | " + time + " Le " + date)
})




}



        
module.exports.help = {
    name: "tts3"
}