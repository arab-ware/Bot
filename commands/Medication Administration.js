/*CMD
  command: Medication Administration
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
  
  Bot.sendMessage("https://t.me/nursebasics/2795")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2796")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2015")
  
}


