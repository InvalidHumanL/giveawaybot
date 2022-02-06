const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setColor("#20C6FF")
      .setTitle("» Command List & Guide for the Bot")
      .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
      .addField("**🎉 Giveaway 🎉**\n","\ng!start [channel-name] [Time] [winners] [Prize]\ng!reroll [prize name]\ng!end [prize name]")
      .addField("**⚡️ Examples ⚡️**", "g!start giveaway 5m 3 $10\ng!end $10\ng!reroll $10")
      .addField("**🤖 Setup 🤖**", "You have to create a role named *Giveaways*, to create giveaways. **No permissions needed**")
      .addField("**💬 Support 💬**", "[Discord](https://discord.gg/Te7gkzSGug) \n <@717416034478456925>\n", true)
      .addField("**💝 Vote 💝**", "[DiscordBotList](https://discordbotlist.com/bots/giveaway-2626)\n", true)
      .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })

    message.channel.send("Go check your DM's.");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
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

