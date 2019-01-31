const Discord = require('discord.js');
const tools = require('./functions.js');
const db = require('quick.db');
const client = new Discord.Client();
const prefix = '!';
const active = new Map();

console.log("Bot started.");
client.on('message', message => {
  // Variables
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  let ops = {
    active: active
  }

  //Quick.db Message Updater
  db.add(`messagesSent_${message.guild.id}_${message.author.id}`, 1);

  //Return Statements
  if (!msg.startsWith(prefix)) return;
  if (message.author.bot) return; //Delete if not wanted

  //Command Handler
  try {

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, tools);

  } catch (e) {

    console.log(e.message);

  } finally {

    console.log(`${message.author.tag} ran the command ${cmd}`);

  }
})

client.login('NTMxMTU0OTA3ODEwNzU4NjU2.DxVhWw.QA8t1v2Sii1YFLxOulF6Z2hbcDU');
