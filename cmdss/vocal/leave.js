module.exports = {
	name: 'leave',
	description: "Fait partir le bot du vocal mais c'est pas tres sympa pour lui",
}

module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {


            
            var connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('./sons/o_revoir.mp3');
            dispatcher.on('finish', () => {
                message.member.voice.channel.leave();
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
                channel.send("[LEAVE] " + user + " a utiliser Leave | " + time + " Le " + date);
            }

            bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[LEAVE] " + user + " a utiliser Leave | " + time + " Le " + date);
    
        }
module.exports.help = {
    name: "leave"
}
