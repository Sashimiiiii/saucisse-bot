module.exports = {
	name: 'lego',
	description: "HEY",
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
        const dispatcher = connection.play('./sons/A_Man_Has_Fallen_Into_The_River_In_Lego_City_Commercial.mp3', {
            volume: 0.3,
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
            channel.send("[LEGO] " + user + " a utiliser Lego | " + time + " Le " + date);
        }

        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[LEGO] " + user + " a utiliser Lego | " + time + " Le " + date);
        }
module.exports.help = {
    name: "lego"
}
