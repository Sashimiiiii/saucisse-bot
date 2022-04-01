const Discord = require('discord.js');
const fs = require('fs');
const talkedRecently = new Set();
const talkedRecently2 = new Set();
let hours = JSON.parse(fs.readFileSync("./hours.json", "utf8"));

module.exports = {
	name: '15h12',
	description: 'Montre dans combien de temps est le prochain 15h12',
}

module.exports.run = async (bot, message, member) => {

       
    
    
    message.delete();

    var today = new Date();
    var tomorrow = new Date()   
    
    if ((today.getHours() >= (14 + hours.hours) && today.getMinutes() >= 12) || today.getHours() > (14 + hours.hours) ) {
        tomorrow.setDate(today.getDate() + 1)        
    }
    tomorrow.setHours(14 + hours.hours)
    tomorrow.setMinutes(12)
    
    Next15h12 = Math.floor(tomorrow.getTime() / 1000)
    message.channel.send(`prochain 15h12 <t:${Next15h12}:R>`)


    

}

module.exports.help = {
    name: "15h12"
}
