const Discord = require('discord.js');
const bot = new Discord.Client();
// made by bmxcoder
// discord: BM_X_Coder#4505
module.exports = {
  name: 'kick',
  discription: "kick",
  execute(message, args){
    // made by bmxcoder
// discord: BM_X_Coder#4505
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du hast keine rechte dazu!");

    let user = message.mentions.members.first();

    if(!user) return message.reply("du hast vergessen ein name anzugeben");

    message.guild.member(user).kick().catch(err=>{
// made by bmxcoder
// discord: BM_X_Coder#4505
      if(err){
        message.reply("der user kann nicht gekickt werden weil er der serverowner ist oder eine höhere role als der bot hat");

      }
    })
  }
}


// made by bmxcoder
// discord: BM_X_Coder#4505
