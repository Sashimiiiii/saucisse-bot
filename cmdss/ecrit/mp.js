const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'mp @nom',
	description: "Envoie un mp avec le bot",
}

module.exports.run = async (bot, message, args) => {

    

        message.delete();
        let destinataire = message.guild.member(message.mentions.users.first());
        if (!destinataire){
            return message.channel.send("L'utilisateur n'existe pas");
        }
    
        
        


        var [user, ...restArgs] = args;
        var text = restArgs.join(' ');

        destinataire.send(text);


if (message.guild.id == 730433603808264192) {
    
        
    const channel = message.guild.channels.cache.get("795755947879825408")
            var user = message.author.tag
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var date = today.getDate()+'/'+(today.getMonth()+1);
       
            channel.send("[MP] " + user + " a mp" + text +" à" + destinataire + " | " + time + " Le " + date);
        }
    
}

module.exports.help = {
    name: "mp"
}