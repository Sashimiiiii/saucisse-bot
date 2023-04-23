module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');

console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 20
const BaseMinutes = 00

var newHours

if (baseHours + hours.hours < 0) {
  
  newHours = (00 - hours.hours);
 
}

else
{
  newHours = baseHours+ hours.hours;
}

const job = new CronJob(`00 ${BaseMinutes} ${newHours } * * 6`, function() {


  console.log('jojo', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

channel.send("<@368849586418352140> on est quel jour?")

  
      console.log("jojo");

});
console.log('After job instantiation', d);
job.start();

}
