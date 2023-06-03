/*CMD
  command: Rest And Sleep
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

const temp = "" + Bot.getProperty("Type" + user.id)

if(temp === "Original") {
  
Bot.sendMessage("https://t.me/nursebasics/2267")
  
}

if(temp === "Translation") {
  
Bot.sendMessage("https://t.me/nursebasics/2269")
  
}

if(temp === "Test Me") {
 
Bot.sendMessage("https://t.me/nursebasics/2321")
  
}

if(temp === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/b087khYn9u8")
  
}
