const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

module.exports = {
	name: 'silence @nom',
	description: 'Fait taire la cible',
}

module.exports.run = async (bot, message, args, client) => {

    var member = message.guild.member(message.mentions.users.first());


const canvas = Canvas.createCanvas(742, 560);
const ctx = canvas.getContext("2d");
const background = await Canvas.loadImage("./images/silence.jpg")
ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
ctx.drawImage(avatar, 20, 330, 200, 200);


ctx.font = "80px Arial";
ctx.fillStyle = "#ffffff";
ctx.fillText(member.displayName , 30, 210);


const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'silence.jpg'
     );

message.channel.send(attachment);



var user = message.author.tag
        var member = member.displayName
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[SILENCE] " + user + " à utilisé Silence sur " + member + " | " + time + " Le " + date)


}

module.exports.help = {
    name: "silence"
}