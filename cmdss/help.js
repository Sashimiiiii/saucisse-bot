const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'help',
	description: "Tu viens de l'utiliser",
}

module.exports.run = async (bot, message, args) => {

    let str = '';
		const commandFiles = fs.readdirSync('./cmdss').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str +="|``s!"+ command.name + "``| " + command.description + "\n";
		}

		message.channel.send(str);

  
}



module.exports.help = {
    name: "help"
}