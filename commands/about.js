const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let about = new Discord.MessageEmbed()
    .setColor("#20C6FF")
    .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
    .setDescription(`
    Hello! I'm **Giveaway**, and I'm here to make it as easy as possible to hold giveaways on your Discord server! I was created by Protyo#0005 (<@717416034478456925>). Check out my commands by typing **g!help**.`)
    .addField(":bar_chart: **Stats**\n\n", `\n ➜ **${client.guilds.cache.size}**` + " Server \n "+ `➜ **${client.channels.cache.size}**` +" Channel\n" , true)
    .addField(":globe_with_meridians: **Links**", "➜ [DiscordBotList](https://discordbotlist.com/bots/giveaway-2626) \n ➜ [Invite](https://discord.com/api/oauth2/authorize?client_id=799797152606846987&permissions=8&scope=applications.commands%20bot) \n ", true)
    .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })
    message.channel.send(about);
}

module.exports.help = {
    name: "about",
}
/**********************************************************
 * @INFO
 * Bot Coded by Protyo#0005
 * @INFO
 * Work for KooJe Development | https://dev.kooje.eu
 * @INFO
 * Please mention him & KooJe Development, when using this Code!
 * @INFO
 *********************************************************/
