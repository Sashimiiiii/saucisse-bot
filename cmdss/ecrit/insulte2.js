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
        
        
        var prefix = "s!insulte2" ;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const nom = message.content.slice(prefix.length).trim().split('/ +/');

        if(roll==1) { 
            message.channel.send(nom[0] + " grosse pute")
        }
        
        else if(roll==2) { 
            message.channel.send(nom[0] + " sale coureuse de rempare")
        }

        else if(roll==3) { 
            message.channel.send(nom[0] + " sale gourgandine")
        }

        else if(roll==4) { 
            message.channel.send(nom[0] + " sale coquebert")
        }

        else if(roll==5) { 
            message.channel.send(nom[0] +" sale puterelle")
        }

        else if(roll==6) { 
            message.channel.send(nom[0] +" est bête comme une valise sans poignée")
        }

        else if(roll==7) { 
            message.channel.send(nom[0] +" sale grippeminaud")
        }

        else if(roll==8) { 
            message.channel.send(nom[0] +" sale truandaille")
        }

        else if(roll==9) { 
            message.channel.send(nom[0] +" sale chiabrena")
        }

        else if(roll==10) { 
            message.channel.send(nom[0] +" sale casse-gonades")
        }

        else if(roll==11) { 
            message.channel.send(nom[0] +" sale takezen")
        }

        else if(roll==12) { 
            message.channel.send(nom[0] +" sale goulamas")
        }

        else if(roll==13) { 
            message.channel.send(nom[0] +" figure de pain sucé")
        }

        else if(roll==14) { 
            message.channel.send(nom[0] +" sale front d'endive")
        }

        else if(roll==15) { 
            message.channel.send(nom[0] +" sale guit")
        }

        else if(roll==16) { 
            message.channel.send(nom[0] +" fille de mouette")
        }

        else if(roll==17) { 
            message.channel.send(nom[0] +" sale cloporte")
        }

        else if(roll==18) { 
            message.channel.send(nom[0] +" sale maraud")
        }

        else if(roll==19) { 
            message.channel.send(nom[0] +" sale terrine")
        }

        else if(roll==20) { 
            message.channel.send(nom[0] +" sale résidu de chromosome Y")
        }

        else if(roll==21) { 
            message.channel.send(nom[0] +" appelle ta mère que je te recommence")
        }

        else if(roll==22) { 
            message.channel.send(nom[0] +" t'es aussi paumé qu'un fils de pute le jour de la fête des pères")
        }

        else if(roll==23) { 
            message.channel.send(nom[0] +" sale fécalomes")
        }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    } 
    }
}

module.exports.help = {
    name: "insulte2"
}
