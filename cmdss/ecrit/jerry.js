const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

module.exports = {
	name: 'jerry',
	description: 'donne une mission',
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
        } while (ctx.measureText(text).width > canvas.width - 320);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };


const canvas = Canvas.createCanvas(946, 480);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/jerry.jpg")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

var prefix = "s!jerry" ;
        
        const args = message.content.slice(prefix.length).trim().split('/ +/');

        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);


ctx.font = applyText(canvas, args[0]); 
ctx.fillStyle = "white";
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

ctx.fillText(args[0] , 330, 140);
ctx.strokeText(args[0] , 330, 140);



const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'mission.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[JERRY] " + user + " a utilisé Jerry avec le texte " + args[0] + " | " + time + " Le " + date)

        if (message.guild.id == 730433603808264192) {
        
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            channel.send("[JERRY] " + user + " a utilisé Jerry avec le texte " + args[0] + " | " + time + " Le " + date);
        }


}
 
module.exports.help = {
    name: "jerry"
}