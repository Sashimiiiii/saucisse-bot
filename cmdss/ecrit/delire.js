const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

module.exports = {
	name: 'delire @nom',
	description: 'Cible etre pas ton délire',
}

module.exports.run = async (bot, message, args, client) => {
    
    message.delete();

    var member = message.guild.member(message.mentions.users.first());


const canvas = Canvas.createCanvas(186, 84);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/pasMonDelire.png")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
ctx.drawImage(avatar, 104, 2, 80, 80);


 //  ctx.font = "80px Arial";
 //  ctx.fillStyle = "#ffffff";
 //  ctx.fillText(member.displayName , 30, 210);


const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'delire.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        var member = member.displayName
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[DELIRE] " + user + " a utilisé DELIRE sur " + member + " | " + time + " Le " + date)

        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            
            
            channel.send("[DELIRE] " + user + " a utilisé DELIRE sur " + member + " | " + time + " Le " + date);
        }
        var user = message.author.tag
        const logs = message.guild.channels.cache.get("803747020522782720");
        logs.send("[DELIRE] " + user + " a utilisé DELIRE sur " + member + " | " + time + " Le " + date);

}

module.exports.help = {
    name: "delire"
}