const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'help',
	description: "Tu viens de l'utiliser",
}

module.exports.run = async (bot, message, args) => {

	message.channel.send("Commandes écrites:");
    let str = '';
		var commandFiles = fs.readdirSync('./cmdss/ecrit/').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str +="[ s!"+ command.name + " ] " + command.description + "\n";
		}

		message.channel.send("```ini\n" + str + "```\n");
		

		setTimeout(() => {
			message.channel.send("Commandes vocales:");
			let str = '';
			var commandFiles = fs.readdirSync('./cmdss/vocal/').filter(file => file.endsWith('.js'));
	
			for (const file of commandFiles) {
				const command = require(`../vocal/${file}`);
				str +="[ s!"+ command.name + " ] " + command.description + "\n";
			}
	
			message.channel.send("```ini\n" + str + "```\n");
		}, 500); 
	
}



module.exports.help = {
    name: "help"
}
