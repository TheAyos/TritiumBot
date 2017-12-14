const Discord = require('discord.js');
const Command = require('./commands')

module.exports = class Help extends Command{

    static match (message) {
        return message.content.startsWith('&help')
    }

    static action (message) {

        //Pour &help en embed
            var help_embed = new Discord.RichEmbed()
                .setTitle("Tritium")
                .setColor('#f26500') //#D9F200
                .addField("Commandes du bot :", "   **&help** : Affiche les commandes du bot !" +
                    "\n \n**&trash** : Sort une phrase **trash** !")

                .addField("Musique :", "   **&play []** : En construction! ***(non fini)***")

                .addField("Utilités :", "   **&ping** : Le bot répond \'pong\' ! " +
                    "\n \n**&google [recherche]** : Fait une recherche Google pour vous! "
                )

                .setFooter("Codé par TheAyos")
            message.delete()
            message.channel.send(help_embed);
            console.log("[INFO]: Commande help demandée !");
    }
}