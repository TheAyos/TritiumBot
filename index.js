// This will check if the node version you are running is the required
// Node version, if it isn't it will throw the following error to inform
// you.
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

// Load the discord.js library and other thingies
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

// Declaring client
const client = new Discord.Client();
// Load config file that contains some useful values
client.config = require("./config.json");
client.logger = require("./modules/Logger.js");

client.commands = new Enmap();
client.aliases = new Enmap();

// Saves settings to disk
client.settings = new Enmap({
  name: "settings"
});

let servers = JSON.parse(fs.readFileSync("./servers.json", "utf8"));
//var servers = {};
client.servers = servers;
//// TODO: change servers var to a file


// This is a fancy function... i think

const initClient = async () => {

  // Load events
  const eventFiles = await fs.readdirSync("./events/");
  client.logger.log(`Loading a total of ${eventFiles.length} events.`);
  eventFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    // This line is awesome... they say
    client.on(eventName, event.bind(null, client));
  });

  const commandFiles = await fs.readdirSync("./commands/");
  client.logger.log(`Loading a total of ${commandFiles.length} commands.`);
  commandFiles.forEach(file => {
    if (!file.endsWith(".js")) return;
    let commandName = file.split(".")[0];
    try {
      client.logger.log(`Attempting to load command ${commandName}`);
      let props = require(`./commands/${commandName}`);
      client.commands.set(commandName, props);
      // props.conf.aliases.forEach(alias => {
      //   client.aliases.set(alias, props.help.name);
      // });
    } catch (e) {
      client.logger.log(`Unable to load command ${commandName}: ${e}`);
    }
  });
};

initClient();

client.login(client.config.token);
//bot.login(process.env.BOT_TOKEN);
