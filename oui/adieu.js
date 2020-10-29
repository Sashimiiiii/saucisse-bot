
module.exports = (bot) => {
const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")


    bot.on('guildMemberRemove', async (member)=> {
    
    const channel = member.guild.channels.cache.find(ch => ch.name === '✋bienvenue')    //✋bienvenue
    //channel.send('Salut <@'+ member.id +'>')

    
    console.log(member.displayName + ' a quitter le serveur')

    
    
    const canvas = Canvas.createCanvas(2480, 3508);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("./images/saucisserevolutionultra.png")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    
    
    //const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
    //const avatar = await Canvas.loadImage(buffer);
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 994, 2650, 527, 527);
    
    
    ctx.font = "110px Futura";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center"
    ctx.fillText(member.displayName + ' est parti : enculé de sauce' , 1240, 3400);
 
    
    
    
    const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
         'adieu.jpg'
         );
    
    channel.send(attachment);
    
    
    }



)
}
