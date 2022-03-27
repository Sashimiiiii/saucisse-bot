module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');

console.log('Before job instantiation');
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 23
const BaseMinutes = 00

const job = new CronJob(`00 ${BaseMinutes} ${baseHours + hours.hours} * * 6`, function() {

  console.log('dimanche', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

  channel.send({ files: ["./images/sunday.mp4"]});

  
      console.log("on est dimanche");

});
console.log('After job instantiation', d);
job.start();

}
