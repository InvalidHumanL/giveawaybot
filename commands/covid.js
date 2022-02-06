const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    category: "📜 - STUFF",
    description: "Track a country or worldwide COVID-19 cases",

    async run (client, message, args){

        let countries = args.join(" ");


        const noArgs = new Discord.MessageEmbed()
        .setTitle('Missing arguments')
        .setColor("#20C6FF")
        .setDescription('You are missing some args (try: **g!covid all** || **g!covid USA**)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all" || "worldwide" || "ww" || "world" || "weltweit" || "überall"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor("#20C6FF")
                .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
                .setTitle(`» Worldwide COVID-19 Statistics`)
                .addField('➜ Confirmed', confirmed)
                .addField('➜ Recovered', recovered)
                .addField('➜ Deaths', deaths)
                .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })


                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor("#20C6FF")
                .setAuthor({ name: 'Protyo', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png', url: 'https://github.com/protyodev/old-giveaway' })
                .setTitle(`» COVID-19 Statistics for ${countries}`)
                .addField('➜ Confirmed', confirmed)
                .addField('➜ Recovered', recovered)
                .addField('➜ Deaths', deaths)
                .setFooter({ text: 'By Protyo#0005', iconURL: 'https://cdn.discordapp.com/attachments/936985190016897055/938911526683811860/LOGOTRANSPARENT.png' })


                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
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
