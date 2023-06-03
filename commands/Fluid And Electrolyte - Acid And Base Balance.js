/*CMD
  command: Fluid And Electrolyte - Acid And Base Balance
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
  
Bot.sendMessage("https://t.me/nursebasics/2396")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2397")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2495")
  
}

if(temp === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/DtnIqIoolEY")
  
}
