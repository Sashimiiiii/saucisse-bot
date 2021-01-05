const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'adieu',
	description: 'Envoie la tragedie de theSkyKid67',
}

module.exports.run = async (bot, message, member) => {

       
    
    
    message.delete();
    message.channel.send("Voila la vidéo de la tragedie de theSkyKid67 : https://youtu.be/gy_7hP1R_uU")
    
    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date)
        
        channel.send("[ADIEU] " + user + " a utiliser Adieu | " + time + " Le " + date);
    }
    

}

module.exports.help = {
    name: "adieu"
}