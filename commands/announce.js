const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    message.delete()
    const embed = new Discord.RichEmbed()
        .setAuthor('New Announcement')
        .setDescription(args[0])
        .setColor(0x26d4ef);
    message.channel.send(embed);
}
