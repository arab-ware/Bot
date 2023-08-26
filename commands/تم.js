/*CMD
  command: تم
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

const userInfo = user.id + "\n" + user.telegramid
const messageInfo = "تم استعمال البوت 🌿💚 من قبل \n"

Bot.sendMessageToChatWithId(1318999805,messageInfo + userInfo)
