const Discord = require('discord.js');
const Command = require('./commands')

const bot = require('../index');

module.exports = class Profile extends Command {

    static match(message) {
        return message.content.startsWith('&profile')
    }

    static action(message) {

        var profile_embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor('0x00FFF')
            .addField("Pseudo", message.author.username + "#" + message.author.discriminator, true)
            .addField("Id", message.author.id, true)
            .addField("Created at", message.author.createdAt, true)

            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username + "'s Profile")

        message.channel.send(profile_embed);
        console.log("[INFO]: Commande profile demandée !");
    }
}