const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if(message.member.roles.find("name", "Alert")) {
        let role = message.guild.roles.find(r => r.name === "Regional Chain Business Alert");
        let member = message.member
        member.addRole(role).catch(console.error);
        message.channel.send('Successfully added Regional Chain Business Alerts.')
    } else {
        message.channel.send('You must buy the Alert pass from the shop!')
    }
}