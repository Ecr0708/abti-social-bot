const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let allowedRole = message.guild.roles.find("name", "Platinum VIP");
    if (message.member.roles.has(allowedRole.id)) {
        let role = message.guild.roles.find(r => r.name === "Exclusive Member");
        let member = message.mentions.members.first();
        member.addRole(role).catch(console.error);
        message.delete();
        message.channel.send('Invited user.')
    } else {
        message.channel.send('You do not have the required role to invite people!');
    }
}