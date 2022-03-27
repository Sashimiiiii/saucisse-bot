
module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const channel = bot.channels.cache.get("730527992148656211");
const fs = require('fs');

let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 23
const BaseMinutes = 00

const job = new CronJob(`00 ${BaseMinutes} ${baseHours + hours.hours} * * 6`, function() {

  console.log('Fin du monkey samedi:', d);
  
  
  
 
  
  channel.send("Funky monkey samedi fini je : pleure")

  let guild = bot.guilds.cache.get("730433603808264192");
      guild.members.cache.forEach(member => {
        member.roles.remove('787108377348014080');
        });
      console.log("role monkey enlevé")

});
job.start();

}
