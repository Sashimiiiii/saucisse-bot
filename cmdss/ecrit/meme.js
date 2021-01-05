const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'meme',
	description: "Envoie un meme de la SRU aléatoire",
}

module.exports.run = async (bot, message, args) => {

    {
{
    message.delete();
     var roll = Math.floor(Math.random() * 14) + 1;     //return Math.floor(Math.random() * (max - min + 1)) + min;
    
     if(roll==1) { 
        message.channel.send({ files: ["./images/meme/are you winning.mp4"] })
    }

    else if (roll==2) {
        message.channel.send({ files: ["./images/meme/dame.mp4"] })

    }
   
    else if (roll==3) {
        message.channel.send({ files: ["./images/meme/doubs.jpg"] })

    }
    else if (roll==4) {
        message.channel.send({ files: ["./images/meme/drapeau.jpg"] })

    }
    else if (roll==5) {
        message.channel.send("https://twitter.com/SRU_Space/status/1290010698387341312") //encule de sauce

    }
    else if (roll==6) {
        message.channel.send({ files: ["./images/meme/hugo.mp4"] })

    }
    else if (roll==7) {
        message.channel.send("https://twitter.com/SRU_Space/status/1290220237523161090") //juge
   
    }
    else if (roll==8) {
    
        message.channel.send({ files: ["./images/meme/kazuma.jpg"] })
 

    }
    else if (roll==9) {

        message.channel.send({ files: ["./images/meme/marius.jpg"] })


    }
    else if (roll==10) {
   
        message.channel.send({ files: ["./images/meme/proverbe.jpg"] })


    }
    else if (roll==11) {
      
        message.channel.send({ files: ["./images/meme/tout saucisse.mp4"] })
 
    }
    else if (roll==12) {
 
        message.channel.send("https://twitter.com/SRU_Space/status/1282428787414765568") //wide saucisse
    

    }
    else if (roll==13) {

        message.channel.send({ files: ["./images/meme/yeti.jpg"] })
    

    }
	  else if (roll==14) {

        message.channel.send({ files: ["./images/meme/mousse.jpg"] })
    

    }


    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        var user = message.author.tag
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
   
        channel.send("[MEME] " + user + " a utiliser Meme | " + time + " Le " + date);
    }
    
}


} 
    
}

module.exports.help = {
    name: "meme"
}
