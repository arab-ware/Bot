/*CMD
  command: Perioperative Nursing Care
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
  
Bot.sendMessage("https://t.me/nursebasics/2512")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2513")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2720")
  
}
