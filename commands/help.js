const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    const embed = new Discord.RichEmbed()
        .setAuthor (`Help for Anti-Social Social Club 3`)
        .setDescription ('\n**Voice Channel Commands**\n\n!meadows\n!burrow\n!mancave\n!park\n!citrusstation\n!penthouse\n!easterbasket\n\n**Music Commands**\n\n!play (song or URL)\n!stop\n!skip\n\n**Economy Commands**\n\n!deposit\n!withdraw\n!give-money\n!money/balance\n!leaderboard\n!work\n!crime\n!rob\n\n**Store Commands**\n\n!store\n!inventory\n!but-item\n!sell-item\n!use-item\n\n**Remind Commands**\n\n!remind-me\n!list-reminders\n!forget-reminder\n\n**Casino Commands** (requires purchase in store)\n\n!blackjack\n!roulette\n!russian-roulette\n!slot-machine\n\n**Misc. Commands**\n\n!vote-mute\n!ping\n!announce (only for announcers)\n!messages\n!messageleaderboard\n!feedback (use in feedback channel)\n!alertcommands\n\n**Use any of these for more info on them.**\n**Please refrain from using commands in main.**\n**Some commands may prompt no response due to a bot being down.**')
        .setColor(0xffffff)

    message.channel.send(embed);
    }
