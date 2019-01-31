const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if(message.member.roles.find("name", "VIP")) {
    let Gamer = message.guild.roles.find(role => role.name === "Gamer");
    message.channel.send(`${Gamer}, ${message.author} is in The Penthouse 💎`);
    } else {
        message.channel.send('You do not have VIP.');
    }
}