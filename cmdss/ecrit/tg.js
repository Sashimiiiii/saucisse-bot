const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'tg @nom',
	description: "Envoie le texte NRV",
}

module.exports.run = async (bot, message) => {

    

        message.delete();
        var prefix = "s!tg" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toUpperCase();
        var nom = command;
        message.channel.send("TA GUEULE "+ nom + " PUTAIN FERME TA GUEULE T4ES NUL T4ES QUUNE MERDE :mountain_cableway:ARRETE AVEC TES ANALYSES DE MERDE "+ nom + " TA VOIX 🤼‍♂INSSUPORTTABLE TA :necktie::necktie:GUEULE DE MERDE MONTRE LA PAS TU VAS RECEVOIR MES POINGS DEDANS JE VAIS T4EXPLOSER:office:PARLE ENCORE UNE FOIS JE TE DETRUIS "+ nom + " §§§§§")
        
    var user = message.author.tag
    var member = message.guild.member(message.mentions.users.first());
    var member = member.displayName
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[TG] " + user + " a utilisé TG sur " + member + " | " + time + " Le " + date)
    
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            
            
            channel.send("[TG] " + user + " a utilisé TG sur " + member + " | " + time + " Le " + date);
        }

        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[TG] " + user + " a utilisé TG sur " + member + " | " + time + " Le " + date);

}
module.exports.help = {
    name: "tg"
}