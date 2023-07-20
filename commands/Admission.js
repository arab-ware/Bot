/*CMD
  command: Admission
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

const temporary = "" + Bot.getProperty("Type" + user.id)

if(temporary === "Original") {
  
  Bot.sendMessage("https://t.me/nursebasics/2783")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2784")
  
}


if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2192")
  
}


