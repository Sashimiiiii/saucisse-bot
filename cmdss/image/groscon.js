const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

module.exports = {
	name: 'con @nom',
	description: 'Donne la médaille du gros con',
}

module.exports.run = async (bot, message, args, client) => {

    var member = message.guild.member(message.mentions.users.first());

    message.delete();
const canvas = Canvas.createCanvas(742, 560);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/gros_con.png")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
ctx.drawImage(avatar, 70, 0, 200, 200);


const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'groscon.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        var member = member.displayName
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[CON] " + user + " a utilisé Con sur " + member + " | " + time + " Le " + date)
        
        if (message.guild.id == 730433603808264192) {
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
           
       
            channel.send("[CON] " + user + " a utilisé con sur " + member + " | " + time + " Le " + date);
        }
        
        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[CON] " + user + " a utilisé Con sur " + member + " | " + time + " Le " + date);

}

module.exports.help = {
    name: "con"
}