/*CMD
  command: Medical Terminology
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
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1254")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1264")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1329")
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1264")
  
}

if(temp === "Youtube") {
  
  const msg1 = "التسجيل الصوتي الاول"
  const msg2 = "التسجيل الصوتي الثاني"
  const msg3 = "المحاضرة على اليوتيوب"
  const part1 = "https://t.me/biochemistry%5Fnursing/1349";
  const part2 = "https://t.me/biochemistry%5Fnursing/1350";
  const yout = "https://youtu.be/lMmD56F-vWU"
  const newLine = "\n"
  
  Bot.sendMessage(msg1+newLine+newLine+part1+newLine+newLine+msg2+newLine+newLine+part2+newLine+newLine+msg3+newLine+newLine+yout)
  
}
