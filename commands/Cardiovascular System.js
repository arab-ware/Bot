/*CMD
  command: Cardiovascular System
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
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1346")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1347")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1565")
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1512")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول"
  const msg2 = "الجزء الثاني"
  const part1 = "https://youtu.be/TwxQFQNeuws";
  const part2 = "https://youtu.be/KX%5FojlgK5Zs";
  const newLine = "\n"
Bot.sendMessage(msg1+newLine+newLine+part1+newLine+newLine+msg2+newLine+newLine+part2)
}
