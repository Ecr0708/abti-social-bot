exports.run = (client, message, args, tools) => {
    tools.embed(message.channel, '**Ping!**', 100000);
}