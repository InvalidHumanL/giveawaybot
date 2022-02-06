
const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
     name: "uptime", 
     category: "informationen ×", 
     aliases: [""], 
     cooldown: 10, 
     usage: "uptime", 
     description: "Teilt Ihnen mit, wie lange der Bot bereits online ist", 
 
   run: async (client, message, args, user, text, prefix) => {
    function duration(ms) { 
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `**${days}** Days, **${hrs}** Hours **${min}** Minutes and **${sec}** Seconds.`
        }


        let uptime = new Discord.MessageEmbed()
        .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
        .setColor("#20C6FF")
        .setDescription(`I am online since ${duration(client.uptime)}`)
        .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })

        message.channel.send(uptime);
    }
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
