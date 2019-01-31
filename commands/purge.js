const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    if(message.member.roles.find("name", "Admin")) {
    if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge!**');
    if (args[0] > 100) return message.channel.send('**Please supply a number less than 100.**');
    message.channel.bulkDelete(args[0])
        .then( message => message.channel.send(`Successfully deleted \`${messages.size}/${args[0]}\` messages.**`).then( msg => msg.delete({ timeout: 5000})));
    } else {
        message.channel.send('You do not have permission to purge.');
    }
}