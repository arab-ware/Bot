/*CMD
  command: Blood System
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
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1507")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1508")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1623")
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1624")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول"
  const msg2 = "الجزء الثاني"
  const part1 = "https://youtu.be/vUnhrs53aCs";
  const part2 = "https://youtu.be/DrVmqKjHSd8";
  const newLine = "\n"
  Bot.sendMessage(msg1+newLine+newLine+part1+newLine+newLine+msg2+newLine+newLine+part2)
  
}
