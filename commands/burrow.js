const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let Gamer = message.guild.roles.find(role => role.name === "Gamer");
    message.channel.send(`${Gamer}, ${message.author} is in The Burrow 🐇`);
}