module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();

console.log('Before job instantiation');
const job = new CronJob('00 00 23 * * 0', function() {


  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

  channel.send({ files: ["./images/Lundi.mp4"]});

  

});
console.log('After job instantiation', d);
job.start();

}
