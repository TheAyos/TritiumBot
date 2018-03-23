const Command = require('./commands');

module.exports = class Skip extends Command {

    static match(message) { return message.content.startsWith('&skip') }

    static action(message) {
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
};