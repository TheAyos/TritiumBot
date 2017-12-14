const Discord = require('discord.js');
const Command = require('./commands');

var randnum = 0;

module.exports = class Trash extends Command{

    static match (message) {
        return message.content.startsWith('&trash')
    }

    static action (message) {
        message.delete();
        random();
        console.log(randnum)
        if (randnum == 0) {
            message.reply("Tu préfères te faire caresser la cuisse par **Hitler** ou embrasser **Marine LePen(is)** ?")
        }
        if (randnum == 1) {
            message.reply("Je vais **chier tellement fort** dans ta bouche que ça va resortir *par en bas !*")
        }
        if (randnum == 2) {
            message.reply("Tu préfères avoir un mono-sourcil **à vie** **OU** ne pas avoir de sourcils **à vie** ?")
        }
        if (randnum == 3) {
            message.reply("Random 3")
        }
    }
};

function random(min, max) {
    min = Math.ceil(0); //inclus
    max = Math.floor(3); //inclus
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}