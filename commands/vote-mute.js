const agree = "✅";
const disagree = "⛔";
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let target = args[0];
    console.log(`${target}`)
    let msg = await message.channel.send(`Votemute for ${args} has been started.`)
    await msg.react(agree);
    await msg.react(disagree);

    const reactions= await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 30000});
    message.channel.send(`Voting complete. \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);
    if(`${reactions.get(agree).count-1} > ${reactions.get(disagree).count-1}`) {
        let role = message.guild.roles.find(r => r.name === "Muted");
        let member = message.mentions.members.first() || message.author();
        member.addRole(role).catch(console.error);
    }
}