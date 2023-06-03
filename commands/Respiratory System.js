/*CMD
  command: Respiratory System
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
  
Bot.sendMessage("https://t.me/anatomy%5Fkufa/1779")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1780")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2021")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول : "
  const msg2 = "الجزء الثاني : "
  const x = "\n"
  const part1 = "https://youtu.be/FbHSATnMhRI"
  const part2 = "https://youtu.be/35yk6nlc3pQ"
  Bot.sendMessage(msg1+x+x+part1+x+x+msg2+x+x+part2)
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/2022")
  
}
