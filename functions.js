const sm = require('string-similarity');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    ping: function() {
        return 'Hello!';
    },
    embed: function(channel, message, timer) {
        channel = channel.channel || channel;
        channel.send({embed:{
            description: message,
            color: 0x1db954
        }}).then(msg => {
            if (!isNaN(timer)) msg.delete({timeout: timer})
        })
    },
    pages: function(message, pages) {
        let page = 1;

        const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])

        message.channel.send(embed).then(msg => {
        msg.react('⏪').then( r => {
            msg.react('⏩')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed);

            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed);
            })
        })
    })
    },
    autocomplete: function(message, string) {
        let members = [];
        let indexes = [];
    
        message.guild.members.forEach(function(member){
            members.push(member.user.username);
            indexes.push(member.id);
    
        })
        let match = sm.findBestMatch(string, members);
        let username = match.bestMatch.target;
        let member = message.guild.members.get(indexes[members.indexOf(username)]);
        
        return member;
    }
}