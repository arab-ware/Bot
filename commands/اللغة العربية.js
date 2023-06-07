/*CMD
  command: اللغة العربية
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

if(temp === "Youtube") {

const link = "🤝 اساسيات قواعد اللغة العربية على اليوتيوب\n\nhttps://youtube.com/playlist?list=PLoYPO0sy0TTAY-pP6hkXvRwn9KdojtmEh\n\n🤝 ملخص كان و أخواتها على اليوتيوب\n\nhttps://youtu.be/CLzEQpK0zlc\n\n🤝 ملخص ان و أخواتها على اليوتيوب\n\nhttps://youtu.be/8UC0sNp2tG8\n\n🤝 ملخص ظن و أخواتها على اليوتيوب\n\nhttps://youtu.be/TP5UqSL1mNE\n\n🤝 ملخص كاد و أخواتها على اليوتيوب\n\nhttps://youtu.be/TD50082ZaHs";

Bot.sendMessage(link)

} else if(temp === "Test Me") {

Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/874")

} else {

Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/801")

}
