
module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();

const job = new CronJob('00 00 23 * * 5', function() {
  console.log('Monkey debut:', d);
  
  
  
 
  const channel = bot.channels.cache.get("730527992148656211");
  channel.send("OUOUOAHAHHOUOU MONKEY MONKEY", { files: ["./images/monkey.mp4"]});

  let guild = bot.guilds.cache.get("730433603808264192");
      guild.members.cache.forEach(member => {
        member.roles.add('787108377348014080');
        });
      console.log("role monkey rajouté")

});
job.start();

}
