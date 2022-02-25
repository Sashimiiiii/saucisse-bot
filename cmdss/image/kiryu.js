const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")

module.exports = {
	name: 'kiryu',
	description: 'fait parler kiryu',
}

module.exports.run = async (bot, message, client) => {
    message.delete();
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 120;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 300);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };


const canvas = Canvas.createCanvas(784, 824);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/kiryu.jpg")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

var prefix = "s!kiryu" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');

        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);


ctx.font = applyText(canvas, args[0]); 
ctx.fillStyle = "#000000";
ctx.fillText(args[0] , 30, 100);


const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'kiryu.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[kiryu] " + user + " a utilisé Kiryu avec le texte " + args[0] +" | " + time + " Le " + date)

        if (message.guild.id == 730433603808264192) {
        
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            channel.send("[kiryu] " + user + " a utilisé Kiryu avec le texte " + args[0] +" | " + time + " Le " + date);
        }
        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[kiryu] " + user + " a utilisé Kiryu avec le texte " + args[0] +" | " + time + " Le " + date);

}
 
module.exports.help = {
    name: "kiryu"
}