const Discord = require('discord.js');
const Command = require('./commands')

const bot = require('../index');

module.exports = class Help extends Command {

    static match(message) {
        return message.content.startsWith('&help')
    }

    static action(message) {

        //Pour &help en embed
        var help_embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
            .setColor('#f26500') //#D9F200
            .addField("Commandes du bot :", "   `&help` : Affiche les commandes du bot ! Non, sérieusement, tu croyais que ça servait à quoi d'autre ?!" +
                "\n\n`&info` : Donne des infos sur **Tritium** !" +
                "\n\n`&invite` : Donne le lien d'invitation de ***Tritium*** !" +
                "\n\n`&profile` : Donne des infos sur ton profil !" +
                "\n\n`&serverinfo` : Donne des infos sur le serveur !" +
                "\n\n`&trash` : Sort une phrase **trash** !")

            .addField("Musique :", "   `&play []` : En construction! ***(non fini)***")

            .addField("Utilités :", "   `&ping` : Le bot répond \'pong\' ! " +
                "\n \n`&google [recherche]` : Fait une recherche Google pour vous ! " +
                "\n \n`&coin` : Pile ou face (Heads or Tails) !"
            )

            .setThumbnail(bot.user.avatarURL)
            .setFooter("Codé par TheAyos#0925")
        //message.delete()
        message.channel.send(help_embed);
        console.log("[INFO]: Commande help demandée !");
    }
}