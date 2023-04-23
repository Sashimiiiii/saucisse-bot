
module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();
const fs = require('fs');

let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));


const baseHours = 00
const BaseMinutes = 00
const BaseDay = 6

var newHours

if (baseHours + hours.hours < 0) {
  

  
  newHours = (baseHours + hours.hours) + 24;

  var NewDay = BaseDay - 1;

  if (NewDay < 0) {
    NewDay = 06
  }
}

else
{
  newHours = baseHours + hours.hours;
  NewDay = BaseDay;
}

if (newHours < 10) {
  newHours = `0${newHours}`
}

const job = new CronJob(`00 ${BaseMinutes} ${newHours} * * ${NewDay}`, function() {

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
