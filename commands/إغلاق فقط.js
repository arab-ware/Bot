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
  group: 
CMD*/

if (
  Bot.getProperty("command" + user.id) == null ||
  Bot.getProperty("command" + user.id) == ""
) {
  Bot.sendMessage(
    "هنالك مشكلة سنقوم باعادة تشغيل البوت لك ، ان استمرت يرجى التواصل معنا و نقدر مجهودكم مقدما . "
  )
  Bot.runCommand("/start")
  return
}
Bot.runCommand(Bot.getProperty("command" + user.id))
Bot.sendMessage(
  "تم الرجوع و اختيار الأمر" + "\n" + Bot.getProperty("command" + user.id)
)

