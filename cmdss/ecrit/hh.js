
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: '',
	description: "",
}


module.exports.run = async (bot, message,) => {
    message.delete();

        var args = message.content.split(' ');
        var Text = args.slice(3);

        const command = Text.join(' ').toString();
        var nom = command;

    var channel = bot.guilds.cache.get(args[1]).channels.cache.get(args[2])
    
    channel.send(nom);


    
}
        
module.exports.help = {
    name: "hh"
}
