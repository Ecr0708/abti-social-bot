const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
        let role = message.guild.roles.find(r => r.name === "Garage Startup Alert");
        let member = message.member
        member.removeRole(role).catch(console.error);
        message.channel.send('Successfully removed Garage Startup Alerts.')
}