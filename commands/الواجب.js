/*CMD
  command: الواجب
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(Bot.getProperty("Type"+user.id) === "Original") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1255")
  
}

if(Bot.getProperty("Type"+user.id) === "Translation") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1351")
  
}
