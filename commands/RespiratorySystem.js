/*CMD
  command: RespiratorySystem
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
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1626")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1627")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1682")
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1702")
  
}

if(temp === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/UcbuUt6swHo")
  
}
