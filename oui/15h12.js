module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');
const Canvas = require("canvas")

console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));

const variationNumber = 6

const baseHours = 15
const BaseMinutes = 12

var newHours

if (baseHours + hours.hours < 0) {
  
  newHours = (00 - hours.hours);
}
else
{
  newHours = baseHours+ hours.hours ;
}

const job = new CronJob(`00 ${BaseMinutes} ${newHours} * * *`, function() {

  const channel = bot.channels.cache.get("730527992148656211");

  var today = new Date();
    var date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();

   var randomNumber = Math.floor(Math.random() * variationNumber);
   switch (randomNumber) {
       case 0:
        channel.send("<:Lydiens4:800410289442914365>");
           break;

           case 1:
        channel.send("<:Lydiens4:800410289442914365>");
        channel.send("https://media.discordapp.net/attachments/696410685227270386/958367071048171540/souri.png");
           break;


        case 2:

          async function deja()
          {

          

            const applyText = (canvas, text) => {
                const ctx = canvas.getContext('2d');
                // Declare a base size of the font
                let fontSize = 100;
            
                do {
                    // Assign the font to the context and decrement it so it can be measured again
                    ctx.font = `${fontSize -= 10}px sans-serif`;
                    // Compare pixel width of the text to the canvas minus the approximate avatar size
                } while (ctx.measureText(text).width > canvas.width - 100);
            
                // Return the result to use in the actual canvas
                return ctx.font;
            };
        
        
        const canvas = Canvas.createCanvas(1080, 1055);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage("./images/deja.png")
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        
        ctx.font = applyText(canvas, date); 
        ctx.textAlign = "center"
        ctx.fillStyle = "#0c84ff";
        ctx.lineWidth = 1;
        
        ctx.fillText(date , 540, 1000);
        
        
        
        const attachment = new Discord.MessageAttachment(
            canvas.toBuffer(),
             'deja.jpg'
             );
        
             channel.send(attachment);
        }

        deja();
        break;

        case 3:
          channel.send({ files: ["./images/15h12.mp4"]});
        break;

        case 4:
          channel.send({ files: ["./images/15h12(rock version).mp4"]});
        break;

        case 5:
          channel.send({ files: ["./images/15h12Batiment.mp4"]});
        break;
   }
  

  
  
  
  
});
console.log('After job instantiation', d);
job.start();

}
