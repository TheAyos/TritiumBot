const Command = require('./commands')

module.exports = class Ping extends Command{

    static match (message) {
        return message.content.startsWith('&ping')
    }

    static action (message) {
        message.delete()
        message.reply('**Pong!**')
        console.log("[INFO]: Pong demandé !")
    }
}

/* //Pour &ping pong
if (message.content === prefix + "ping") {
    message.delete()
    message.channel.send("**Pong!**")
    console.log("[INFO]: Pong demandé !")
}*/