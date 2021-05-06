const Discord = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas")
const snekfetch = require("snekfetch")
const GIFEncoder = require('gifencoder');
const { createCanvas } = require('canvas');
var ffmpeg = require('fluent-ffmpeg');

module.exports = {
	name: 'microonde @nom',
	description: 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
}

module.exports.run = async (bot, message, args, client) => {
    
    var member = message.guild.member(message.mentions.users.first());
    message.delete();

    var background = await Canvas.loadImage("./images/microonde1.jpg")
    var background2 = await Canvas.loadImage("./images/microonde2.jpg")
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
   
    var canvas = createCanvas(300, 300);
    var ctx = canvas.getContext('2d');
    ctx.scale(-1, 1);
    ctx.drawImage(avatar, -300, 0, 300, 300);
    
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./image.png', buffer);

    const avatar2 =  await Canvas.loadImage("./image.png")
     
    const encoder = new GIFEncoder(1500, 883);
    // stream the results as they are available into myanimated.gif
    encoder.createReadStream().pipe(fs.createWriteStream('microonde.gif'));
     
    encoder.start();
    encoder.setRepeat(-1);   // 0 for repeat, -1 for no-repeat
    encoder.setDelay(1000);  // frame delay in ms
    encoder.setQuality(10); // image quality. 10 is default.
     
    // use node-canvas
    var canvas = createCanvas(1500, 883);
    var ctx = canvas.getContext('2d');





    // Frame1
    ctx.scale(1, 1);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
 
    encoder.addFrame(ctx);
     
    // Frame2

    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height)
    encoder.addFrame(ctx);
     
    // Frame3

    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height)
   // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.scale(1, 1);
    ctx.drawImage(avatar, 586, 230, 300, 300);
    encoder.addFrame(ctx);
     
    // Frame4
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.3;
    ctx.scale(1, 1);
    ctx.drawImage(avatar, 586, 230, 300, 300);
    ctx.globalAlpha = 1.0;
    encoder.addFrame(ctx);

    // Frame5

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.3;
    ctx.drawImage(avatar2, 586, 230, 300, 300);
    ctx.globalAlpha = 1.0;
    ctx.scale(1, 1);
    encoder.addFrame(ctx);

   // Frame6

     ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
     ctx.globalAlpha = 0.3;  
     ctx.drawImage(avatar, 586, 230, 300, 300);
     ctx.globalAlpha = 1.0;
     encoder.addFrame(ctx);

     // Frame7
     ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
     ctx.globalAlpha = 0.3;
     ctx.drawImage(avatar2, 586, 230, 300, 300);
     ctx.globalAlpha = 1.0;
     ctx.scale(1, 1);
     encoder.addFrame(ctx);

     // Frame6

     ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
     ctx.globalAlpha = 0.3;  
     ctx.drawImage(avatar, 586, 230, 300, 300);
     ctx.globalAlpha = 1.0;
     encoder.addFrame(ctx); 

      // Frame7
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 0.3;
      ctx.drawImage(avatar2, 586, 230, 300, 300);
      ctx.globalAlpha = 1.0;
      ctx.scale(1, 1);
      encoder.addFrame(ctx);
    
    // Frame8

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.3; 
    ctx.scale(1, 1);
    ctx.drawImage(avatar, 586, 230, 300, 300);
    ctx.globalAlpha = 1.0;
    encoder.addFrame(ctx);

    // Frame9
    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(avatar, 586, 230, 300, 300);
    ctx.globalAlpha = 0.7; 
    ctx.fillStyle = "black";
    ctx.fillRect(586, 230, 300, 300);
    ctx.globalAlpha = 1.0;
    encoder.addFrame(ctx);



    



    encoder.finish();
	
	message.channel.send({ files: ["./microonde.gif"]});
  /*  
    ffmpeg()  
    .input('./microonde.gif')
    .input('./sons/microonde.mp3')
    .save('./microonde.mp4')

    setTimeout(() => {

        (message.channel.send({ files: ["./microonde.mp4"]}));
        
    }, 1000); 

  */ 




 var user = message.author.tag
         var member = member.displayName
         var today = new Date();
         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         var date = today.getDate()+'/'+(today.getMonth()+1);
         console.log("[MICROONDE] " + user + " a utilisé MICROONDE sur " + member + " | " + time + " Le " + date)
 
         
         if (message.guild.id == 730433603808264192) {
         
         
             const channel = message.guild.channels.cache.get("795755947879825408")
             
             
             channel.send("[MICROONDE] " + user + " a utilisé MICROONDE sur " + member + " | " + time + " Le " + date);
         }
         
         bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[MICROONDE] " + user + " a utilisé MICROONDE sur " + member + " | " + time + " Le " + date);
 
}

module.exports.help = {
    name: "microonde"
}
