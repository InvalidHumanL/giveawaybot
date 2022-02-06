const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Beautify = require('beautify');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
  
  if (message.author.id !== "717416034478456925") {
    return message.channel.send(":fingers_crossed: Forbidden: This Command can only be used of <@717416034478456925>")
  }
  
  if (!args[0]) {
    message.channel.send("You need to evaluate _**SOMETHING**_ Please!")
  }
  
  try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }
    
    const toEval = args.join(" ");
    const evaluated = eval(toEval);
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Eval")
    .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
    .addField("ToEvaluate", `\`\`\`js\n${Beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("Evaluated", evaluated)
    .addField("Type of:", typeof(evaluated))
    .setTimestamp()
    .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })

    message.channel.send(embed);
    
  } catch (e) {
    let errorembed = new Discord.MessageEmbed()
    .addField("\:x: Error!")
    .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
    .setDescription(e)
    .setTimestamp()
    .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })

    message.channel.send(errorembed);
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
