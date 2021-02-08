const Discord = require('discord.js');
const config = require('../../configs/config.json');
const superagent = require('superagent');

module.exports = {
    config: {
        name: 'hug',
        description: 'Hugs people',
        aliases: ["hug"],
        usage: '<user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/hug");
              const embed = new Discord.MessageEmbed()
             .setColor(config.embedcolor)
              .setTitle("Here's your Hug, 🤗")
          .setDescription(`${victim} is hugged by ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
          .setFooter(`© razer `, "https://cdn.discordapp.com/attachments/790496199483457540/793725544264892456/1609305203034.png")
      
        message.channel.send(embed);
        
    }
}

