module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');


console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 00
const BaseMinutes = 00
const BaseDay = 2

var newHours

if (baseHours + hours.hours < 0) {
  

  
  newHours = (baseHours + hours.hours) + 24;

  var NewDay = BaseDay - 1;

  if (NewDay < 0) {
    NewDay = 06
  }
}

else
{
  newHours = baseHours + hours.hours;
  NewDay = BaseDay;
}

if (newHours < 10) {
  newHours = `0${newHours}`
}

const job = new CronJob(`00 ${BaseMinutes} ${newHours} * * ${NewDay}`, function() {



  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

  channel.send({ files: ["./images/mardi.mp4"]});

  

});

job.start();

}
