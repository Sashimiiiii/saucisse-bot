const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

module.exports = {
	name: 'robert',
	description: 'truc',
}

module.exports.run = async (bot, message, client) => {
    message.delete();
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 80;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 500);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };


const canvas = Canvas.createCanvas(960, 568);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/robert.png")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

var prefix = "s!robert" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');

        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);


ctx.font = applyText(canvas, args[0]); 
ctx.fillStyle = "black";
ctx.lineWidth = 1;

ctx.fillText(args[0] , 20, 100);



const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'robert.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[ROBERT] " + user + " a utilisé Robert avec le texte " + args[0] + " | " + time + " Le " + date)

        if (message.guild.id == 730433603808264192) {
        
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            channel.send("[ROBERT] " + user + " a utilisé Robert avec le texte " + args[0] + " | " + time + " Le " + date);
        }
        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[ROBERT] " + user + " a utilisé Robert avec le texte " + args[0] + " | " + time + " Le " + date);

}
 
module.exports.help = {
    name: "robert"
}