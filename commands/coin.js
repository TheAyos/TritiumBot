const Discord = require('discord.js');
const Command = require('./commands');

//const Promise = require('bluebird');

module.exports = class Coin extends Command {


    static match(message) {
        return message.content.startsWith('&coin')
    }

    static action(message) {
        const number = Math.floor(Math.random() * 2) + 1;
        console.log("[INFO]: Coin !");

        if (number === 1) return Promise.resolve(message.channel.send("Pile", {files: ["./images/Heads.png"]}));
        return Promise.resolve(message.channel.send("Face", {files: ["./images/Tails.png"]}));
    }
}