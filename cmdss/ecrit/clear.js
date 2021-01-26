var googleTTS = require('google-tts-api');

module.exports = {
	name: 'clear',
	description: "|Admin| s!clear (nombre de message a supprimer)",
}


module.exports.run = async (bot, message,) => {

    message.delete();
    
    
if(message.member.roles.cache.some(r => r.name === "Ultra Saucisses") || (message.member.hasPermission('ADMINISTRATOR'))) {
    var user = message.author.tag
    const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
    const amount = args.join(' '); // Amount of messages which should be deleted
    
    if (!amount) return message.reply('Faut mettre le nombre a supprimer'); // Checks if the `amount` parameter is given
    if (isNaN(amount)) return message.reply('Faut rentrer : nombre'); // Checks if the `amount` parameter is a number. If not, the command throws an error

    if (amount > 100) return message.reply('Supprimer plus de 100 message = illégal'); // Checks if the `amount` integer is bigger than 100
    if (amount < 1) return message.reply('Faut supprimer au moin : 1 message'); // Checks if the `amount` integer is smaller than 1

    await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
   )});
   var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[CLEAR] " + user + " à clear: " + args + " messages | " + time + " Le " + date)
   
    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        
        
        channel.send("[CLEAR] " + user + " à clear: " + args + " messages | " + time + " Le " + date);
    }
    var user = message.author.tag
    const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[CLEAR] " + user + " à clear: " + args + " messages | " + time + " Le " + date);
   
}



    
    

else {
    message.reply('Il faut les : permissions');
}




}



        
module.exports.help = {
    name: "clear"
}