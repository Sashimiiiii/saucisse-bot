const Discord = require("discord.js"); // So6
const fs = require('fs');
const welcome = require ('./oui/welcome');
const adieu = require ('./oui/adieu');
const monkeyDebut = require("./oui/monkeyDebut");
const monkeyFin = require("./oui/monkeyFin");
const vendredi = require("./oui/vendredi");
const dimanche = require("./oui/dimanche");
const lundi = require("./oui/lundi");
const mercredi = require("./oui/mercredi");
const mardi = require("./oui/mardi");
const quinzeheure = require("./oui/15h12");

const jojo = require("./oui/jojo");

const talkedRecently = new Set();
const talkedRecently2 = new Set();

var bot = new Discord.Client();

var lastMessage;

bot.on('ready', () => {        
    console.log("BOT IS READY");
    bot.user.setActivity("s!help", {type: "LISTENING"});
})
    

bot.on('ready', () => {        
   
    welcome(bot);
    adieu(bot);
    monkeyDebut(bot);
    monkeyFin(bot);
    vendredi(bot);
    dimanche(bot);
    lundi(bot);
    mercredi(bot);
    mardi(bot);
    quinzeheure(bot);
    jojo(bot);
})

   
    
    

  

bot.commands = new Discord.Collection();

function loadCmds() {
    fs.readdir("./cmdss/ecrit/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/ecrit/${f}`)];
            var props = require(`./cmdss/ecrit/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};



function loadCmds2() {
    fs.readdir("./cmdss/vocal/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/vocal/${f}`)];
            var props = require(`./cmdss/vocal/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};
function loadCmds3() {
    fs.readdir("./cmdss/image/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmdss/image/${f}`)];
            var props = require(`./cmdss/image/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};
loadCmds();
loadCmds2();
loadCmds3();

bot.on('message', async message => {

    if (message.author.bot) return
    
    
    
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: "z!"
    };
}

let prefix = prefixes[message.guild.id].prefixes;
    
    
var msg = message.content.toUpperCase();
var msg2 = message.content;
    
    if(message.member.roles.cache.some(r => r.name === "🙈 SINGE") && msg.includes("S!") )
{
    message.channel.send("TG SINGE");
    return;
}
    
 if(msg.includes("A") || msg.includes("E") || msg.includes("I") || msg.includes("O") || msg.includes("U") || msg.includes("Y"))
{
   // if (message.guild.id == 730433603808264192)
    {
        var today = new Date();
        var day = today.getDay();

        const Test = await message.channel.messages.fetch({ limit: 2 });
        lastMessage = Test.last();
        lastMessageContent = lastMessage.content;
        
        if(msg.includes("OUI") && lastMessageContent.includes("SEUL CHEZ TOI"))
        {
            message.channel.send("https://media.discordapp.net/attachments/641923235075850241/838186511849226250/20210501_132746.png")
        } 
    }
}
	
	if (message.guild.id == 730433603808264192) {
    if(message.type === "PINS_ADD") message.channel.send("https://media.discordapp.net/attachments/756642366835785738/965976471900422144/unknown-13.png");
	}
	
    if (msg.includes("NIGGA") || msg.includes("NIGGER")|| msg.includes("NEGRO")||msg.includes("NEGRE")||msg.includes("NÉGRO")||msg.includes("NÉGRE")) {
        if (message.guild.id == 730433603808264192) {
      
            if (msg.includes("MONTENEGRO")) return;
            
    message.delete();
    message.reply("<:tnico_2_1:800706896294051880>");
    message.channel.send("https://media.discordapp.net/attachments/696410685227270386/830191408437526568/171062215_6013053202053533_4265888126316665470_n.jpg");

        }
}
    
    if(msg.includes("BITE")) {
        message.react('🍆');
    }
    
    if(msg.includes("LAPIN")) {
        message.react('822130773661450241');
    }
    
    if(msg.includes("CHORUS")) {
        message.react('746041025147174973');
    }
	
	
    if(msg2.includes("https://www.instagram.com")) {
	    console.log(msg2)
        setTimeout(() => {

		
        if(message.embeds.length > 0)
        {
		console.log("déja embed")
            return;
        }
        

            
            if (msg2.endsWith('/')) 
            {
		    console.log("fini par /")
                return;
            }
            if (msg2.includes("reel")) 
            {
                 message.channel.send("les vidéo ça marche po 😔");
                return;
            }
            
            var result = msg2;
            
            while (!result.endsWith('/'))
            {
                result = result.slice(0,-1);
            }          
            message.channel.send(result + "media/");
        

    
                   }, 1500); 
        }
      if(msg.includes('AIRFALL') || msg.includes('HERE') || msg.includes('WAS')) {

        if (message.author.id == '326694663387873282') {

        

        if (talkedRecently2.has(message.author.id)) {
            message.delete();
        }
    
        else if (talkedRecently.has(message.author.id)) {
            
            message.channel.send("No, airfall was not here et arrête de spam");
           
            talkedRecently2.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after a minute
              talkedRecently2.delete(message.author.id);
            }, 60000);
    
    } else {

        message.channel.send('No, airfall was not here!');

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
    }
}
    if(msg.includes('BEYWHEELZ')) {
        message.delete();
        message.reply("BeyMERDE INTERDIT fdp").then(sentMessage => {
        sentMessage.react('🤬');});
    }

    if(msg.includes('MORBIUS')) {
        message.channel.send("https://tenor.com/view/morbius-gif-25461795");
    }

    if(msg.includes('BIBLA')) {
        var couteau = new Discord.MessageEmbed()
        .setAuthor(`Ce mec est un linguiste occitan`)
        .setColor('#ff0000')
        .setImage("https://media.discordapp.net/attachments/730527992148656211/739934124264915025/received_3263177790387217.jpeg");
        message.channel.send(couteau)
    }



    if(msg.includes("SAUCISSE")) {
        message.react('730772983475339275');
    }
    
    if(msg.includes("MANU")) {
        message.react('731078430145118249');
    }
    if(msg.includes("NOU")) {
        message.react('739896409062506537');
    }
   
      
    
   // if(msg.includes('PIZZA')) {
   //     message.channel.send("```\nDomino's Pizza\n```", { files: ["./images/dominos.mp4"]});
   // }

          
    
        
        

    

        
    
var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    


}) 



bot.login(process.env.TOKEN_BOT)
