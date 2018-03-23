const Discord = require('discord.js');
const Command = require('./commands')

module.exports = class Help extends Command {

    static match(message) {
        return message.content.startsWith('&invite')
    }

    static action(message) {
        message.channel.send("Voici le lien d'invitation pour m'avoir dans votre serveur!\n " +
        ":100: --> https://discordapp.com/oauth2/authorize?client_id=386967569976000512&scope=bot&permissions=2146958591");
        console.log("[INFO]: Invite demandé !");
    }
}