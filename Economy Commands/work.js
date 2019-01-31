const db = require('quick.db'),
    ms = require('parse-ms');

exports.run = async (client, message, args, tools) => {
    let max = 500
    let min = 200
    var output = Math.floor(Math.random() * (max - min + 1)) + min;
    let cooldown = 900000
    let amount = output;
    let lastWork = await db.fetch(`lastWork_${message.author.id}`);
    if (lastWork !== null && cooldown - (Date.now() - lastWork) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastWork));
        message.channel.send(`Please wait **${timeObj.minutes}m ${timeObj.seconds}s**!`);
    } else {
        message.channel.send(`Successfully worked and earned **$${amount}**.`);
        db.set(`lastWork_${message.author.id}`, Date.now());
        db.add(`money_${message.guild.id}_${message.author.id}`, output);
    }
}
