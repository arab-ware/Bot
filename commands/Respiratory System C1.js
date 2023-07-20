/*CMD
  command: Respiratory System C1
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
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2105")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2106")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1259")
  
}



if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/Xfkse4Q-pM4")
  Bot.sendMessage("https://youtu.be/1dCcR9nc3-0")
  
}
