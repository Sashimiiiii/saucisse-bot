const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'insulte2 [mot]',
	description: "Insulte aléatoirement le mot spécifié",
}

module.exports.run = async (bot, message, args) => {

    {
{
        
        message.delete();
        var roll = Math.floor(Math.random() * 23) + 1;
        var couteau = new Discord.Message()
        
        
        var prefix = "s!insulte2" ;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        var nom = command;

        if(roll==1) { 
            message.channel.send(nom + " grosse pute")
        }
        
        else if(roll==2) { 
            message.channel.send(nom + " sale coureuse de rempare")
        }

        else if(roll==3) { 
            message.channel.send(nom + " sale gourgandine")
        }

        else if(roll==4) { 
            message.channel.send(nom + " sale coquebert")
        }

        else if(roll==5) { 
            message.channel.send(nom +" sale puterelle")
        }

        else if(roll==6) { 
            message.channel.send(nom +" est bête comme une valise sans poignée")
        }

        else if(roll==7) { 
            message.channel.send(nom +" sale grippeminaud")
        }

        else if(roll==8) { 
            message.channel.send(nom +" sale truandaille")
        }

        else if(roll==9) { 
            message.channel.send(nom +" sale chiabrena")
        }

        else if(roll==10) { 
            message.channel.send(nom +" sale casse-gonades")
        }

        else if(roll==11) { 
            message.channel.send(nom +" sale takezen")
        }

        else if(roll==12) { 
            message.channel.send(nom +" sale goulamas")
        }

        else if(roll==13) { 
            message.channel.send(nom +" figure de pain sucé")
        }

        else if(roll==14) { 
            message.channel.send(nom +" sale front d'endive")
        }

        else if(roll==15) { 
            message.channel.send(nom +" sale guit")
        }

        else if(roll==16) { 
            message.channel.send(nom +" fille de mouette")
        }

        else if(roll==17) { 
            message.channel.send(nom +" sale cloporte")
        }

        else if(roll==18) { 
            message.channel.send(nom +" sale maraud")
        }

        else if(roll==19) { 
            message.channel.send(nom +" sale terrine")
        }

        else if(roll==20) { 
            message.channel.send(nom +" sale résidu de chromosome Y")
        }

        else if(roll==21) { 
            message.channel.send(nom +" appelle ta mère que je te recommence")
        }

        else if(roll==22) { 
            message.channel.send(nom +" t'es aussi paumé qu'un fils de pute le jour de la fête des pères")
        }

        else if(roll==23) { 
            message.channel.send(nom +" sale fécalomes")
        }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    } 
    }
}

module.exports.help = {
    name: "insulte2"
}