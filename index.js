const Discord = require('discord.js');
const bot = new Discord.Client();
const Google = require('./commands/google');
const Ping = require('./commands/ping');
const Play = require('./commands/play');
const Help = require('./commands/help');
const Trash = require('./commands/trash');

var prefix = ("&");

bot.on('ready', function () {
    console.log('Tritium connecté avec succés!');
    bot.user.setGame('[&help] Tritium Bot').catch(console.error)
});
bot.login('Mzg2OTY3NTY5OTc2MDAwNTEy.DQrTWg.kEf09mfElkPETBFvwLn3s3RRNV0');

bot.on('message', function (message) {
    let commandUsed =
        Help.parse(message) ||
        Trash.parse(message) ||
        Ping.parse(message) ||
        Play.parse(message) ||
        Google.parse(message)
});

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur Plutonium! ' + member.displayName)
    }).catch(console.error)
});