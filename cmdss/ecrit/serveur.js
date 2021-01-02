const Discord = require('discord.js');
const fs = require('fs');
const { send } = require('process');

module.exports = {
	name: 'serveur',
	description: 'Pour savoir  dans combien de serveur est le bot',
}

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        message.channel.send("Le bot est dans **" + bot.guilds.cache.size + "** serveurs")
   
    }

    }
}

module.exports.help = {
    name: "serveur"
}