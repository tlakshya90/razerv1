const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const Zalgo = require('to-zalgo')

module.exports = {
    config: {
        name: 'zalgo',
        description: 'Converts your text to Zalgo',
        aliases: ["zalgo"],
        usage: '<text>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const embed = new MessageEmbed()
     .setColor(config.embedcolor)
     .setDescription(`${Zalgo(args.join(" "))}`)
     .setTimestamp()
     .setFooter('©  razer ', 'https://cdn.discordapp.com/attachments/790496199483457540/793725544264892456/1609305203034.png')
    message.channel.send(embed)
    }
}

