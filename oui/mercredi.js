module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();

console.log('Before job instantiation');
const job = new CronJob('00 00 22 * * 2', function() {

  console.log('Mercredi', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

  channel.send({ files: ["./images/mercredi.png"]});

  
      console.log("on est Mercredi");

});
console.log('After job instantiation', d);
job.start();

}
