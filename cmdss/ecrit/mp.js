const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'mp @nom',
	description: "Envoie un mp avec le bot",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        
        let destinataire = message.guild.member(message.mentions.users.first());
        if (!destinataire){
            return message.channel.send("L'utilisateur n'existe pas");
        }
var prefix = "s!mp" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');
       
        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
        destinataire.send(args[1]);
        } 
    }
}

module.exports.help = {
    name: "mp"
}
