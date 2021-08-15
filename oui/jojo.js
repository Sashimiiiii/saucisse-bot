module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();

console.log('Before job instantiation');
const job = new CronJob('00 00 19 * * 6', function() {

  console.log('jojo', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");

channel.send("<@368849586418352140> on est quel jour?")

  
      console.log("jojo");

});
console.log('After job instantiation', d);
job.start();

}