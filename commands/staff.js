const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let partner = new Discord.MessageEmbed()
    .setColor("#20C6FF")
    .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
    .setDescription('**Head-Developer:** × <@717416034478456925>')
    .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })

    .setTimestamp()
    message.channel.send(partner);
}

module.exports.help = {
    name: "staff",
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

