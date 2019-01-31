const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if (!args[0]) {
        message.channel.send('Give some feedback!');
    }
    message.delete()
    const embed = new Discord.RichEmbed()
        .setAuthor('Feedback')
        .setDescription(args[0])
        .setColor(0x26d4ef);
    message.channel.send(embed);
}
