/*CMD
  command: Cardiovascular System C1
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
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2099")
  
}

if(temporary === "Translation") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2100")
  
}

if(temporary === "Short") {
  
  Bot.sendMessage("")
  
}

if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1033")
  
}

if(temporary === "Old") {
  
  Bot.sendMessage("")
  
}

if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/zAtopKZCzY0")
  
}
