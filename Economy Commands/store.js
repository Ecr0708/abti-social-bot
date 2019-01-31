const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Anti-Social Store!`)
    .setDescription('**Use !buy <item> to buy!**')
    .addField(`Cookie`, '`700$`\nInsertTextHere')
    .addField(`Admin`, '`1800$`\nInsertTextHere') 
    .setColor("0x00B0F0") 

    message.channel.send(embed)
}