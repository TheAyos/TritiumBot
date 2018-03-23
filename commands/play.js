const Command = require('./commands');
const YoutubeStream = require('ytdl-core');

var args = require('../index');
var servers = require('../index');

module.exports = class Play extends Command {

    static match(message) { return message.content.startsWith('&play') }

    static action(msg) {

            if (!args[1]) {
                msg.channel.send("Please provide a link");
                return;
            }
            if (!msg.member.voiceChannel) {
                msg.channel.send("You must be in a voice channel");
                return;
            }
            msg.channel.send("queue: []");
            if (!servers[msg.guild.id]) servers[msg.guild.id] = {
                queue: []
            }

            var server = servers[msg.guild.id];
            msg.channel.send("server.queue.push");
            server.queue.push(args[1]);

            const channel = msg.member.voiceChannel;
            if (!msg.guild.voiceConnection) {
                channel.join().then(function (connection) {
                    play(connection, msg)
                })
            }

            function play(connection, msg) {
                var server = servers[msg.guild.id];

                server.dispatcher = connection.playStream(YoutubeStream(server.queue[0], {filter: "audioonly"}));
                msg.channel.send("playStream");
                server.queue.shift();
                server.dispatcher.on("end", function () {
                    msg.channel.send("end func");
                    if (server.queue[0]) play(connection, msg);
                    else connection.disconnect();
                });
            }
        }
    }