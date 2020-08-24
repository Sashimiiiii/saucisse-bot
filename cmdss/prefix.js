const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'prefix [nouveau prefix]',
	description: 'pour changer le prefix',
}

module.exports.run = async (bot, message, args, prefix) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

		
	
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

	if (args[0] === "") {
            return message.channel.send(`Le prefix est vide!, ${message.author}!`);
        }
	
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
.setTitle("Prefix mit à jour")
.setDescription("Le prefix est maintenant "+ args[0]);

message.channel.send(sEmbed);

}

module.exports.help = {
    name: "prefix"
}
