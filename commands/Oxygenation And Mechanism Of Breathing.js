/*CMD
  command: Oxygenation And Mechanism Of Breathing
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
  
Bot.sendMessage("https://t.me/nursebasics/2392")
  
}

if(temp === "Translation") {
  
  Bot.sendMessage("https://t.me/nursebasics/2394")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2747")
  
}

if(temp === "Youtube") {
  
  const link = "المحاضرة على اليوتيوب الجزء الاول ✅ :\n\nhttps://youtu.be/PuMnMA1adWU\n\nالمحاضرة على اليوتيوب الجزء الثاني ✅ :\n\nhttps://youtu.be/JIFcGd7eTUw\n\nالمحاضرة على اليوتيوب الجزء الثالث ✅ :\n\nhttps://youtu.be/EoC6r01Qh3A";
  
  Bot.sendMessage(link)
  
}
