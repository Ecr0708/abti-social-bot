const db = require('quick.db');

exports.run = async (client, message, args, tools) => {
    let user = message.mentions.users.first() || message.author;
    let balance = await db.fetch(`money_${message.guild.id}_${user.id}`);
    if (balance === null) balance = 0;
    message.channel.send(`${user.username} - Balance: **$${balance}**`);
}