const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
client.config = config;

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#20C6FF",
        reaction: "🎊"
    }
});

client.on("guildCreate", guild => {
    let client = guild.client;
    let embed = new Discord.MessageEmbed()
    .setColor("#20C6FF")
    .setDescription("Oh, a new server. Hello there, I'm happy to be on your server and I hope I am getting used a lot. And btw, if you need any help feel free to contact <@717416034478456925>. Cheers!")
    .setTimestamp()
    guild.owner.send({embed: embed});
    })

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});




client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command loaded: ${commandName}`);
    });
});


    
// Login
client.login(config.token);

/**********************************************************
 * @INFO
 * Bot Coded by Protyo#0005
 * @INFO
 * Work for KooJe Development | https://dev.kooje.eu
 * @INFO
 * Please mention him & KooJe Development, when using this Code!
 * @INFO
 *********************************************************/

