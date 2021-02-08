const Discord = require('discord.js');
const config = require('../../configs/config.json');
const superagent = require('superagent');


module.exports = {
    config: {
        name: 'wink',
        description: 'winks others ;)',
        aliases: ["wink"],
        usage: '<user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new Discord.MessageEmbed()
          .setColor(config.embedcolor)
          .setTitle("Here's your Wink 😉 ")
          .setImage(body.link)
          .setTimestamp()
          .setFooter(`© Razer `,"https://cdn.discordapp.com/attachments/790496199483457540/793725544264892456/1609305203034.png");
        message.channel.send(embed);
    }
}

