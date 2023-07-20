/*CMD
  command: Vital Signs
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
  
  Bot.sendMessage("https://t.me/nursebasics/2792")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2793")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/1661")
  
}



if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/INA4DsVcIB8")
Bot.sendMessage("https://youtu.be/binQmzVDnsg")
  
}
