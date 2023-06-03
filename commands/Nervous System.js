/*CMD
  command: Nervous System
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
  
Bot.sendMessage("https://t.me/anatomy%5Fkufa/1447")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1448")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1538")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول : "
  const msg2 = "الجزء الثاني : "
  const x = "\n"
  const part1 = "https://youtu.be/5W2u5v8etT8"
  const part2 = "https://youtu.be/35yk6nlc3pQ"
  Bot.sendMessage(msg1+x+x+part1+x+x+msg2+x+x+part2)
  
}

if(temp === "Short") {
  

  
}
