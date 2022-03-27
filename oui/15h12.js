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
  
  channel.send("<:Lydiens4:800410289442914365>");
  
  
  
  
});
console.log('After job instantiation', d);
job.start();

}
