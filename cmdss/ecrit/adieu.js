const Discord = require('discord.js');
const fs = require('fs');
const talkedRecently = new Set();
const talkedRecently2 = new Set();


module.exports = {
	name: 'adieu',
	description: 'Envoie la tragedie de theSkyKid67',
}

module.exports.run = async (bot, message, member) => {

       
    
    
    message.delete();

    if (talkedRecently2.has(message.author.id)) {
       
    }

    else if (talkedRecently.has(message.author.id)) {
        
        message.channel.send("Pitier tg");
       
        talkedRecently2.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently2.delete(message.author.id);
        }, 60000);

} else {

    message.channel.send("Voila la vidéo de la tragedie de theSkyKid67 : https://youtu.be/gy_7hP1R_uU")
    
    talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }

    
    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date)
        
        channel.send("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date);
    }
    var user = message.author.tag
    const logs = message.guild.channels.cache.get("803747020522782720")
    logs.send("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date);
    
}

module.exports.help = {
    name: "adieu"
}