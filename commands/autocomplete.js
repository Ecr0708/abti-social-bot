const Discord = require('discord.js');
const sm = require('string-similarity');

exports.run = (client, message, args, tools) => {
    let member = tools.autocomplete(message, args.join(' '));
    tools.embed(message.channel, 'Do you mean: ' + member);
};