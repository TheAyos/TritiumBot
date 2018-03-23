const Command = require('./commands');
const servers = require('../index');

module.exports = class Skip extends Command {

    static match(message) { return message.content.startsWith('&skip') }

    static action(message) {
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
    }
};