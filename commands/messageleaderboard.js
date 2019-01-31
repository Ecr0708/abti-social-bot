const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  let money = db.startsWith(`messagesSent_${message.guild.id}`, { sort: '.data'});
  let content = "";

  for (let i = 0; i < money.length; i++) {
    let user = bot.users.get(money[i].ID.split('_')[2])
    content += `${i+1}. ${user} ~ ${money[i].data} Messages\n`
  }
  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name} - Messages Leaderboard`, message.guild.iconURL)
  .setDescription(content)
  .setColor(0x51267)

  message.channel.send(embed)
}
