module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');

console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 14
const BaseMinutes = 12

const job = new CronJob(`00 ${BaseMinutes} ${baseHours + hours.hours} * * *`, function() {

  const channel = bot.channels.cache.get("730527992148656211");

  var today = new Date();
    var date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();

   var randomNumber = Math.floor(Math.random() * 2);
   switch (randomNumber) {
       case 0:
        channel.send("<:Lydiens4:800410289442914365>");
           break;


        case 1:
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
           break;
   }
  

  
  
  
  
});
console.log('After job instantiation', d);
job.start();

}
