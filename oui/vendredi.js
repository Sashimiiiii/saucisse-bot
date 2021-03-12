module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();


const job = new CronJob('00 00 23 * * 4', function() {

  console.log('Vendredi', d);
  
  
  
 
const channel = bot.channels.cache.get("730527992148656211");
  
  channel.send("", { files: ["./images/vendredi.mp4"]});

  
      console.log("on est vendredi");

});

job.start();

}
