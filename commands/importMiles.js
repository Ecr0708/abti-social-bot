const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let role1 = message.guild.roles.find(r => r.name === "Gamer");
    let role2 = message.guild.roles.find(r => r.name === "Member");
    let member = message.mentions.members.first();
    member.addRole(role1).catch(console.error);
    member.addRole(role2).catch(console.error);
    message.delete()
}