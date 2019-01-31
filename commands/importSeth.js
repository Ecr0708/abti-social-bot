const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let role1 = message.guild.roles.find(r => r.name === "Gambler");
    let role2 = message.guild.roles.find(r => r.name === "Member");
    let role3 = message.guild.roles.find(r => r.name === "Weather");
    let role5 = message.guild.roles.find(r => r.name === "Rocket League");
    let role6 = message.guild.roles.find(r => r.name === "Minecraft");
    let role7 = message.guild.roles.find(r => r.name === "Algebra II");
    let role8 = message.guild.roles.find(r => r.name === "History");
    let role9 = message.guild.roles.find(r => r.name === "Spanish II");
    let role10 = message.guild.roles.find(r => r.name === "Band");
    let role11 = message.guild.roles.find(r => r.name === "Honors English I");
    let role12 = message.guild.roles.find(r => r.name === "Honors Science");
    let role13 = message.guild.roles.find(r => r.name === "Gamer");
    let role14 = message.guild.roles.find(r => r.name === "Fortnite");
    let role15 = message.guild.roles.find(r => r.name === "Bedwars");
    let role16 = message.guild.roles.find(r => r.name === "Bloxburg");
    let role17 = message.guild.roles.find(r => r.name === "Switch");
    let role18 = message.guild.roles.find(r => r.name === "Stardew Valley");
    let role19 = message.guild.roles.find(r => r.name === "Interesting Cake");
    let role20 = message.guild.roles.find(r => r.name === "Moderator");
    let member = message.mentions.members.first();
    member.addRole(role1).catch(console.error);
    member.addRole(role2).catch(console.error);
    member.addRole(role3).catch(console.error);
    member.addRole(role5).catch(console.error);
    member.addRole(role6).catch(console.error);
    member.addRole(role7).catch(console.error);
    member.addRole(role8).catch(console.error);
    member.addRole(role9).catch(console.error);
    member.addRole(role10).catch(console.error);
    member.addRole(role11).catch(console.error);
    member.addRole(role12).catch(console.error);
    member.addRole(role13).catch(console.error);
    member.addRole(role14).catch(console.error);
    member.addRole(role15).catch(console.error);
    member.addRole(role16).catch(console.error);
    member.addRole(role17).catch(console.error);
    member.addRole(role18).catch(console.error);
    member.addRole(role19).catch(console.error);
    member.addRole(role20).catch(console.error);
    message.delete()
}