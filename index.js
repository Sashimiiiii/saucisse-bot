const Discord = require("discord.js"); // So6
const fs = require('fs');
const welcome = require ('./oui/welcome')
const adieu = require ('./oui/adieu')


var bot = new Discord.Client();

bot.on('ready', () => {        
    console.log("BOT IS READY");
    bot.user.setActivity("s!help", {type: "STREAMING", url:"https://www.twitch.tv/maki_sashimi"});
})
    

bot.on('ready', () => {        
   
    welcome(bot);
    adieu(bot);
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
    
    if(msg.includes('AIRFALL WAS HERE')) {
        message.channel.send('No, airfall was not here!');
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
    if(msg.includes('SAUCE')) {
        message.channel.send('Trop nul les sauces');
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
    if(msg.includes('CHALLENGE')) {
        message.channel.send('Challenge sexe tiktok tit cock 2014 ça tourne mal');
    }
    if(msg.includes('PIZZA')) {
        message.channel.send("```\nDomino's Pizza\n```", { files: ["./images/dominos.mp4"]});
    }

          
     if(msg.includes('KPOP')) {
        message.delete();
        message.reply("tu veux jouer à kpøp cells ?");
    }
    

        
    
var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    


}) 



bot.login(process.env.TOKEN)
