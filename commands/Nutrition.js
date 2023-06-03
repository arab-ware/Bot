/*CMD
  command: Nutrition
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
  
Bot.sendMessage("https://t.me/nursebasics/2271")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2272")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2386")
  
}

if(temp === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/pqEBQH4ZFa8")
  
}
