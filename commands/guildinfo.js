const Discord = require('discord.js');
const Command = require('./commands');

const bot = require('../index');

module.exports = class Info extends Command {

    static match(message) {
        return message.content.startsWith('&serverinfo')
    }

    static action(message) {

        if(!message.guild.available){
            message.reply("Le serveur est indisponible :'(");
            return;
        } else {

        }

        var serverinfo_embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('#f23100')
            .addField("Propriétaire", message.guild.owner, true)
            .addField("ID", message.guild.id, true)
            .addField("Membres", message.guild.memberCount, true)
            .addField("Humains", message.guild.robots, true)
            .addField("Bots", message.guild.bot, true)
            .addField("En ligne", message.guild.members.online, true)
            .addField("Rôles", message.guild.roles.size, true)
            .addField("Channels", message.guild.channelCount, true)
            .addField("Création du serveur", message.guild.createdAt, true)
            .addField("Région", message.guild.region, true)

            .setThumbnail(message.guild.iconURL)
            .setFooter("TritiumBot ©•Aujourd'hui à " + message.guild.name)

        message.channel.send(serverinfo_embed);
        console.log("[INFO]: Commande serverinfo demandée !");
    }
}