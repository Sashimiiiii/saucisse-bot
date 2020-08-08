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
     var roll = Math.floor(Math.random() * 13) + 1;     //return Math.floor(Math.random() * (max - min + 1)) + min;
    
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
        message.channel.send({ files: ["./images/meme/enculé de sauce.mp4"] })

    }
    else if (roll==6) {
        message.channel.send({ files: ["./images/meme/hugo.mp4"] })

    }
    else if (roll==7) {
        message.channel.send({ files: ["./images/meme/juge.mp4"] })
   
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
 
        message.channel.send({ files: ["./images/meme/wide saucisse.mp4"] })
    

    }
    else if (roll==13) {

        message.channel.send({ files: ["./images/meme/yeti.jpg"] })
    

    }

    
}


} 
    
}

module.exports.help = {
    name: "meme"
}
