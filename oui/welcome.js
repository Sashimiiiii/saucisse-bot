
module.exports = (bot) => {
const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")

    bot.on("guildMemberAdd", async member => {

     //   member.send("blah blah");

           
        

    const channel = member.guild.channels.cache.find(ch => ch.id === '744284383187304551');
    //744284383187304551

    
//setTimeout(() => {
    console.log(member.displayName +' a rejoin le serveur')
if(!member.roles.cache.find(r => r.name === "SINGE"))
{
    var role = member.guild.roles.cache.find(r => r.name === "Saucissons");
    member.roles.add(role).catch(console.error);

}
    
//}, 3000);
    
    
    const canvas = Canvas.createCanvas(2480, 3508);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("./images/saucisserevolutionultra.png")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    
    
    //const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
    //const avatar = await Canvas.loadImage(buffer);
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 994, 2650, 527, 527);
    
    
    ctx.font = "220px Futura";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center"
    ctx.fillText(member.displayName , 1240, 3400);
    
    ctx.font = "bold 220px Futura";
    
    ctx.fillText('Bienvenue dans la :' , 1240, 600);
    
    
    const attachment = new Discord.MessageAttachment(
        canvas.toBuffer(),
         'Welcome.jpg'
         );
    

         
    channel.send(attachment)
    setTimeout(() => {
       
        (channel.send("<@" + member.id +"> bienvenue chez les saucisses vrer, n'hésite pas à te présenter et/ou à mettre une photo de toi dans <#800684306644729867> qu'on se connaisse mieux et tout là"));
        
       
    }, 1000);
    


    
    
    
}

    
    )
}
