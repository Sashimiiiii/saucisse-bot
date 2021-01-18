const Discord = require("discord.js"); // So6
const fs = require('fs');
const welcome = require ('./oui/welcome');
const adieu = require ('./oui/adieu');
const monkeyDebut = require("./oui/monkeyDebut");
const monkeyFin = require("./oui/monkeyFin");


const talkedRecently = new Set();
const talkedRecently2 = new Set();

var bot = new Discord.Client();

bot.on('ready', () => {        
    console.log("BOT IS READY");
    bot.user.setActivity("s!help", {type: "LISTENING"});
})
    

bot.on('ready', () => {        
   
    welcome(bot);
    adieu(bot);
    monkeyDebut(bot);
    monkeyFin(bot);
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
loadCmds();
loadCmds2();

bot.on('message', message => {

    if (message.author.bot) return
    
    
    
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: "s!"
    };
}

let prefix = prefixes[message.guild.id].prefixes;
    
    
var msg = message.content.toUpperCase();
    
    if(msg.includes("CHORUS")) {
        message.react('746041025147174973');
    }
    
     if(msg.includes('HERE') && (message.author.id == '326694663387873282') ) {

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

    if(msg.includes('BEYWHEELZ')) {
        message.delete();
        message.reply("BeyMERDE INTERDIT fdp").then(sentMessage => {
        sentMessage.react('🤬');});
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
   
      
    
    if(msg.includes('PIZZA')) {
        message.channel.send("```\nDomino's Pizza\n```", { files: ["./images/dominos.mp4"]});
    }

          
    
        
        

    

        
    
var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    


}) 



bot.login(process.env.TOKEN)
