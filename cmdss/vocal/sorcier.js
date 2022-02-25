module.exports = {
	name: 'sorcier',
	description: "c pa sorcier",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (!message.guild.me.hasPermission("SPEAK")) {
        message.channel.send("j'ai pas les permissions :(")
        return;
    }
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/sorcier.mp3', {
            volume: 0.5,
        });
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }
    
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        
        if (message.guild.id == 730433603808264192) {
            channel.send("[SORCIER] " + user + " a utiliser Sorcier | " + time + " Le " + date);
        }

        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[SORCIER] " + user + " a utiliser Sorcier | " + time + " Le " + date);
        }
module.exports.help = {
    name: "sorcier"
}