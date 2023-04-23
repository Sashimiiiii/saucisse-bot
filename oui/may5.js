module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');

console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 00
const BaseMinutes = 00
const BaseDay = 05

var newHours

if (baseHours + hours.hours < 0) {
  

  
  newHours = (baseHours + hours.hours) + 24;

  var NewDay = BaseDay - 1; 
}

else
{
  newHours = baseHours + hours.hours;
  NewDay = BaseDay;
}

if (newHours < 10) {
  newHours = `0${newHours}`
}

if (NewDay < 10) {
  NewDay = `0${NewDay}`
}


const job = new CronJob(`00 ${BaseMinutes} ${newHours} ${NewDay} 05 *`, function() {

  console.log('may5', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

  channel.send({ files: ["./images/may5.png"]});

  
      console.log("on est dimanche");

});
console.log('After job instantiation', d);
job.start();

}
