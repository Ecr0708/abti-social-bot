const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let role = message.guild.roles.find(r => r.name === "Gamer");
    let member = message.member
    member.addRole(role).catch(console.error);
}