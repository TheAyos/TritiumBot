const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = bot;

const YoutubeStream = require('ytdl-core');

const Invite = require('./commands/invite');
const Google = require('./commands/google');
const Ping = require('./commands/ping');
const Help = require('./commands/help');
const Info = require('./commands/info');
const GuildInfo = require('./commands/guildinfo');
const Profile = require('./commands/profile');
const Play = require('./commands/play');
const Skip = require('./commands/skip');
const Stop = require('./commands/stop');
const Trash = require('./commands/trash');
const Coin = require('./commands/coin');

bot.on('message', function (msg) {

    var prefix = ("&");
    var servers = {};
    module.exports = servers;
    // var args = msg.content.substring(prefix.length).split(" ");
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
    module.exports = args;

    if (msg.author.bot || msg.channel.type !== 'text') return; // Do not respond to messages from bots or messages that are not from guilds.
    if (msg.channel.type === "dm") return; //Do not respond to private messages

    let commandUsed =
        Coin.parse(msg) ||
        Invite.parse(msg) ||
        Trash.parse(msg) ||
        Ping.parse(msg) ||
        Help.parse(msg) ||
        Info.parse(msg) ||
        GuildInfo.parse(msg) ||
        Profile.parse(msg) ||
        Play.parse(msg) ||
        Skip.parse(msg) ||
        Stop.parse(msg) ||
        Google.parse(msg)
});

bot.on('ready', function () {
    console.log(`Tritium connecté avec succés sous le nom de ${bot.user.username} !`);
    console.log(`Serving ${bot.guilds.size} guilds and ${bot.users.size} users.`);
    bot.user.setGame('[&help] Tritium 2.0 Patch').catch(console.error)
});

//bot.login('NDI2NDQzNzAxOTUxMTM1NzQ0.DZhzVg.a4A4XXWR1o3DtTyWSNw9UgrzKxU');
bot.login(process.env.BOT_TOKEN);

bot.on('error', (e) => console.error(e));
bot.on('warn', (e) => console.warn(e));

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + ', moi, je suis Tritium, un bot Discord développé par **TheAyos** et je suis *enchanté* de te rencontrer!')
    }).catch(console.error)
});