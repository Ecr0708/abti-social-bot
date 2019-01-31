const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let role1 = message.guild.roles.find(r => r.name === "Gambler");
    let role2 = message.guild.roles.find(r => r.name === "Member");
    let role3 = message.guild.roles.find(r => r.name === "Weather");
    let role4 = message.guild.roles.find(r => r.name === "Geometry");
    let role7 = message.guild.roles.find(r => r.name === "Health");
    let role8 = message.guild.roles.find(r => r.name === "History");
    let role9 = message.guild.roles.find(r => r.name === "German II");
    let role10 = message.guild.roles.find(r => r.name === "Band");
    let role11 = message.guild.roles.find(r => r.name === "Honors English I");
    let role12 = message.guild.roles.find(r => r.name === "Science");
    let role13 = message.guild.roles.find(r => r.name === "Gamer");
    let role14 = message.guild.roles.find(r => r.name === "Fortnite");
    let member = message.mentions.members.first();
    member.addRole(role1).catch(console.error);
    member.addRole(role2).catch(console.error);
    member.addRole(role3).catch(console.error);
    member.addRole(role4).catch(console.error);
    member.addRole(role7).catch(console.error);
    member.addRole(role8).catch(console.error);
    member.addRole(role9).catch(console.error);
    member.addRole(role10).catch(console.error);
    member.addRole(role11).catch(console.error);
    member.addRole(role12).catch(console.error);
    member.addRole(role13).catch(console.error);
    member.addRole(role14).catch(console.error);
    message.delete()
}