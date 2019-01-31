const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    const embed = new Discord.RichEmbed()
        .setAuthor ('Alert Related Commands')
        .setDescription (`**!alertnotification** - Notifies you of all new income.\n**Specific Alerts**\n!garagealert\n!smallalert\n!localalert\n!regionalalert\n!monopolyalert\n**Remove these roles by typing *no* in front.**\n**Example:** !nolocalalert`)
        .setColor (0xffffff)

message.channel.send(embed);
}