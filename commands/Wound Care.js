/*CMD
  command: Wound Care
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
  
  Bot.sendMessage("https://t.me/nursebasics/2789")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2790")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/1878")
  
}


if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/gR7twtXgY9M")
  
}
