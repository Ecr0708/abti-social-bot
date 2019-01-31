const db = require('quick.db')

exports.run = async (client, message, args, tools) => {
    let member = message.mentions.members.first() || message.member;
    let hotdog = await db.fetch(`messagesSent_${message.guild.id}_${message.author.id}`);

    message.channel.send(`**Personal Messages: ${hotdog}**`)
    
}