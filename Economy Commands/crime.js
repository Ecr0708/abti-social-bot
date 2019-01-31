const db = require('quick.db'),
    ms = require('parse-ms');

exports.run = async (client, message, args, tools) => {
    let max = 1000
    let min = 200
    var output = Math.floor(Math.random() * (max - min + 1)) + min;
    let cooldown = 3.6e+6
    let amount = output;
    let randomMin = 0
    let randomMax = 200;
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomnumber < 70) {
    let lastCrime = await db.fetch(`lastCrime_${message.author.id}`);
     if (lastCrime !== null && cooldown - (Date.now() - lastCrime) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastCrime));
        message.channel.send(`Please wait **${timeObj.minutes}m ${timeObj.seconds}s**!`);
    } else {
        message.channel.send(`Successfully worked and earned **$${amount}**.`);
        db.set(`lastCrime_${message.author.id}`, Date.now());
        db.add(`money_${message.guild.id}_${message.author.id}`, output);
    }
    } else {
        let lastCrime = await db.fetch(`lastCrime_${message.author.id}`);
        if (lastCrime !== null && cooldown - (Date.now() - lastCrime) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastCrime));
            message.channel.send(`Please wait **${timeObj.minutes}m ${timeObj.seconds}s**!`);
        } else {
            let fineMax = 1000
            let fineMin = 500
            var fine = Math.floor(Math.random() * (fineMax - fineMin + 1)) + fineMin;
            message.channel.send(`You were caught and fined **$${amount}**`);
            db.subtract(`money_${message.guild.id}_${message.author.id}`, output);
            db.set(`lastCrime_${message.author.id}`, Date.now());
        }
    }
    
}
