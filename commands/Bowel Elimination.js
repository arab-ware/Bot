/*CMD
  command: Bowel Elimination
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
  
Bot.sendMessage("https://t.me/nursebasics/2507")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2508")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2644")
  
}

