/*CMD
  command: إغلاق فقط
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

Bot.runCommand(Bot.getProperty("command"+user.id))
Bot.sendMessage("تم الرجوع و اختيار الأمر" + "\n" + Bot.getProperty("command"+user.id))
