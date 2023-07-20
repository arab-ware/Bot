/*CMD
  command: اللغة الإنجليزية الكورس الثاني
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

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/kufa2023/753")
  
}

if(temp === "Original") {
  
  const link = "المحاضرة الاولى :\n\nhttps://t.me/english%5Ffor%5Fnursing/803\n\nالمحاضرة الثانية :\n\nhttps://t.me/english%5Ffor%5Fnursing/810\n\nالمحاضرة الثالثة :\n\nhttps://t.me/english%5Ffor%5Fnursing/817\n\nالمحاضرة الرابعة :\n\nhttps://t.me/english%5Ffor%5Fnursing/836"
  
  Bot.sendMessage(link)
  
}

if(temp === "Translation") {
  
  const link2 = "المحاضرة الاولى :\n\nhttps://t.me/english%5Ffor%5Fnursing/804\n\nالمحاضرة الثانية :\n\nhttps://t.me/english%5Ffor%5Fnursing/811\n\nالمحاضرة الثالثة :\n\nhttps://t.me/english%5Ffor%5Fnursing/818\n\nالمحاضرة الرابعة :\n\nhttps://t.me/english%5Ffor%5Fnursing/837"
  
  Bot.sendMessage(link2)
  
}

if(temp === "Record") {
  
  const link3 = "المحاضرة الاولى :\n\nhttps://t.me/kufa2023/661\n\nالمحاضرة الثانية :\n\nhttps://t.me/kufa2023/662\n\nالمحاضرة الثالثة :\n\nhttps://t.me/kufa2023/663\n\nالمحاضرة الرابعة :\n\nhttps://t.me/kufa2023/664";
  
  Bot.sendMessage(link3)
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/909")
  
}
