module.exports = {
	name: 'stop',
	description: "Fait fermer sa sale gueule au bot",
}

module.exports.run = async (bot, message, args) => {
  

  if (!message.guild.me.hasPermission("SPEAK")) {
    message.channel.send("j'ai pas les permissions :(")
    return;
}

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/stop.mp3');
      } else {
        message.reply('Il faut etre dans le : channel vocal');
        }

        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        
        if (message.guild.id == 730433603808264192) {
          channel.send("[STOP] " + user + " a utiliser Stop | " + time + " Le " + date);
      }

      bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[STOP] " + user + " a utiliser Stop | " + time + " Le " + date);
       
    }
module.exports.help = {
    name: "stop"
}