/*CMD
  command: Injection
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
  
  Bot.sendMessage("https://t.me/nursebasics/2798")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2799")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2055")
  
}



if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/S4X3uYwFYBU")
Bot.sendMessage("https://youtu.be/4mz0TYg95-4")
  
}
