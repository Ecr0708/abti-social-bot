const db = require('quick.db');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.members.first()) return message.channel.send(`**Please mention a user!**`)
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''));
        if (isNaN(amount)) return message.channel.send(`**Please define an amount!**`);
        let targetBalance = await db.fetch(`money_${message.guild.id}_${targetMember.id}`),
            selfBalance = await db.fetch(`money_${message.guild.id}_${message.author.id}`);
        
        if (targetBalance === null) targetBalance = 0;
        if (selfBalance === null) selfBalance = 0;
        
        if (amount > selfBalance) return message.channel.send(`**Sorry, you don't have enough money!**`);
        db.add(`money_${message.guild.id}_${targetMember.id}`, amount);
        db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
        message.channel.send(`**Successfully send $${amount} to ${targetMember.user.tag}!**`);
};