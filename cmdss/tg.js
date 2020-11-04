const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'tg @nom',
	description: "Envoie le texte NRV",
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var prefix = "s!tg" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toUpperCase();
        var nom = command;
        message.channel.send("TA GUEULE "+ nom + " PUTAIN FERME TA GUEULE T4ES NUL T4ES QUUNE MERDE :mountain_cableway:ARRETE AVEC TES ANALYSES DE MERDE "+ nom + " TA VOIX 🤼‍♂INSSUPORTTABLE TA :necktie::necktie:GUEULE DE MERDE MONTRE LA PAS TU VAS RECEVOIR MES POINGS DEDANS JE VAIS T4EXPLOSER:office:PARLE ENCORE UNE FOIS JE TE DETRUIS "+ nom + " §§§§§")
        
	var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[TG] " + user + " à utilisé TG sur " + nom + " | " + time + " Le " + date)
    }
}
}
module.exports.help = {
    name: "tg"
}
