const Discord = require('discord.js');
const config = require('../../configs/config.json');
const solenolyrics = require('solenolyrics');
const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: 'lyrics',
        description: 'Shows the Lyrics of a given song',
        aliases: [""],
        usage: '<query>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        try {
            if(!args)  return message.channel.send("Bruh, Provide a Song")
           
             let embed = new MessageEmbed()
                 .setDescription(`**Please wait, im looking for the Lyrics, It can take \`few \` seconds** ${client.emotes.load} .`)
                 .setColor(config.embedcolor)
     
                 const msg = await message.channel.send(embed)
     
         let ar = args.join(' ').split(/\s*,\s*/);
         var lyric = await solenolyrics.requestLyricsFor(ar[0]); 
         var title = await solenolyrics.requestTitleFor(ar[0]); 
        // console.log(title);
         var author = await solenolyrics.requestAuthorFor(ar[0]); 
        // console.log(author);
         var icon  = await solenolyrics.requestIconFor(ar[0]); 
        // console.log(icon);
        if (lyric.length > 4095) {
                 msg.delete()
                 return message.channel.send('Lyrics are too long to be returned as embed');
             }
        const succesfull = new MessageEmbed()
        .setColor(config.embedcolor)
        .setThumbnail(icon)
        .setDescription(lyric)
        .setTitle(title)
        .setAuthor(author)
        .setFooter(
         "© razer",
         "https://cdn.discordapp.com/attachments/790496199483457540/793725544264892456/1609305203034.png"
       )
      .setTimestamp();
         msg.edit(succesfull)
         } catch (e) 
         {
     
             
         }

         
    }
}

