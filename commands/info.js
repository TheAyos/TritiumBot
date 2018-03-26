const Discord = require('discord.js');
const Command = require('./commands');

const bot = require('../index');

module.exports = class Info extends Command {

    static match(message) {
        return message.content.startsWith('&info')
    }

    static action(message) {

        var info_embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
            .setColor('#D9F200')
            .addField("Créateur", "TheAyos#0925")
            .addField("Serveurs", `${bot.guilds.size}`, true)
            .addField("Utilisateurs", `${bot.users.size}`, true)
            .addField("Sessions vocales", `${bot.voiceConnections.size}`, true)
            .addField("Utilisation de la mémoire", `${bot.user.memoryUsage}`, true)

            .addField("Created at", `${bot.user.createdAt}`, true)

            .addField("Lien d'invitation", " --> :100: https://discordapp.com/oauth2/authorize?client_id=426443701951135744&scope=bot&permissions=2146958591")

            .setThumbnail(`${bot.user.avatarURL}`)
            .setFooter("TritiumBot © • Aujourd'hui à " + `${bot.user.time}`)

        message.channel.send(info_embed);
        console.log("[INFO]: Commande profile demandée !");
    }
}