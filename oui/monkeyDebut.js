
module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();


console.log('Before job instantiation');
const job = new CronJob('00 00 00 * * 6', function() {
  console.log('At Ten Minutes:', d);
  
  
  
 
  const channel = bot.channels.cache.get("641923235075850241");
  channel.send("OUOUOAHAHHOUOU MONKEY MONKEY")


});
console.log('After job instantiation', d);
job.start();

}
