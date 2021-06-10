
// by bmxcoder1820
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();


// by bmxcoder1820
const PREFIX = "!";

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);

   bot.commands.set(command.name, command);

}

// by bmxcoder1820

bot.on('message', message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "kick":
    bot.commands.get('kick').execute(message, args);


  break

// by bmxcoder1820
  }

});

bot.login('token');

// by bmxcoder1820
