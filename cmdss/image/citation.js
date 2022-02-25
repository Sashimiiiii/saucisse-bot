const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")

module.exports = {
	name: 'citation',
	description: '@nom (texte)',
}

module.exports.run = async (bot, message, args) => {
    message.delete();
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 120;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            ctx.font = `${fontSize -= 5}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 30);
    
        // Return the result to use in the actual canvas
        return ctx.font;
    };


const canvas = Canvas.createCanvas(398, 201);
const ctx = canvas.getContext("2d");


        
        if (args[0] === "") {
            return message.channel.send(`Écris au moins un mot, ${message.author}!`);
        }
        var member = message.guild.member(message.mentions.users.first());
        
        if (member == null) {

            const background = await Canvas.loadImage("./images/citation2.png")
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

            var prefix = "s!citation";
            const args = message.content.slice(prefix.length).trim().split('/ +/');

            ctx.font = applyText(canvas, args[0]); 
            ctx.fillStyle = "white";
            ctx.fillText(args[0] , 30, 70);

            const attachment = new Discord.MessageAttachment(
                canvas.toBuffer(),
                 'citation.jpg'
                 );
            
            message.channel.send(attachment);
                    

        }
        else{ 
 
            const background = await Canvas.loadImage("./images/citation.png")
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


        var [user, ...restArgs] = args;
        var text = restArgs.join(' ');

//const {body:buffer} = await snekfetch.get(member.user.displayAvatarURL({ dynamic:true }));
//const avatar = await Canvas.loadImage(buffer);

const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
ctx.drawImage(avatar, 30, 120, 72, 72);

ctx.font = applyText(canvas, text); 
ctx.fillStyle = "white";
ctx.fillText(text , 30, 70);

ctx.font = "22px Arial";
ctx.fillText(member.displayName , 112, 150);


const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
     'citation.jpg'
     );

message.channel.send(attachment);
        }


var user = message.author.tag
        
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate()+'/'+(today.getMonth()+1);
        console.log("[CITATION] " + user + " a utilisé citation | " + time + " Le " + date);

        if (message.guild.id == 730433603808264192) {
        
        
        
            const channel = message.guild.channels.cache.get("795755947879825408")
            channel.send("[CITATION] " + user + " a utilisé citation | " + time + " Le " + date);
        }
        bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[CITATION] " + user + " a utilisé citation | " + time + " Le " + date);

}
 
module.exports.help = {
    name: "citation"
}