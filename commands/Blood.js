/*CMD
  command: Blood
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
  
Bot.sendMessage("https://t.me/anatomy%5Fkufa/1639")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1640")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1742")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول : "
  const msg2 = "الجزء الثاني : "
  const x = "\n"
  const part1 = "https://youtu.be/lGz-XqYpAsM"
  const part2 = "https://youtu.be/B8EetIegVZU"
  Bot.sendMessage(msg1+x+x+part1+x+x+msg2+x+x+part2)
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1743")
  
}
