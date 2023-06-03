/*CMD
  command: Urinary Elimination
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
  
Bot.sendMessage("https://t.me/nursebasics/2501")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2502")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2573")
  
}

if(temp === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/a68KQsQJisM")
  
}
