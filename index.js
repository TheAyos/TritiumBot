const Discord = require('discord.js');
const bot = new Discord.Client();
/*const Google = require('./commands/google');
const Ping = require('./commands/ping');
const Play = require('./commands/play');*/

var prefix = ("&");

bot.on('ready', function () {
    console.log('Tritium connecté avec succés!');
    bot.user.setGame('[&help] Tritium Bot').catch(console.error)
});
bot.login('Mzg2OTY3NTY5OTc2MDAwNTEy.DQrTWg.kEf09mfElkPETBFvwLn3s3RRNV0');

bot.on('message', function (message) {
    //Pour &help en embed
    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Commandes du bot :", "   -**&help** : Affiche les commandes du bot !")
            .addField("Interaction", "  **&ping** : Le bot répond \'pong\' !")
        message.delete()
        message.channel.send(help_embed);
        console.log("[INFO]: Commande help demandée !");
    }

    //Pour &ping pong
    if (message.content === prefix + "ping") {
        message.delete()
        message.channel.send("Pong")
        console.log("[INFO]: Pong demandé !")
    }

    /*let commandUsed =
        Google.parse(message) ||
        Ping.parse(message) ||
        Play.parse(message)*/
});

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur Plutonium! ' + member.displayName)
    }).catch(console.error)
});