/*CMD
  command: اللغة الإنجليزية الكورس الأول
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
  
  Bot.sendMessage("https://t.me/kufa2023/811")
  
} else if(temporary === "Translation") {

Bot.sendMessage("https://t.me/kufa2023/816")

} else {

Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/498")

}
