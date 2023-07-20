/*CMD
  command: IV Cannulation
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
  
  Bot.sendMessage("https://t.me/nursebasics/2801")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2802")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2077")
  
}



if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/TRB1snrsxGw")
  
}
