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
  group: 
CMD*/

function ForwardMessage(link) {
  const resultLink = link.replaceAll("%5F" , "_")
    const matches = resultLink.match(/\/(\w+)\/(\d+)/);
    if (matches && matches.length === 3) {
        const from_chat_id = `@${matches[1]}`;
        const message_id = parseInt(matches[2]);
        

HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: user.telegramid,
        message_id: message_id
      }
    })
        
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}


const temp = "" + Bot.getProperty("Type" + user.id)

if (
  Bot.getProperty("Type" + user.id) == null ||
  Bot.getProperty("Type" + user.id) == ""
) {
  Bot.sendMessage(
    "هنالك مشكلة سنقوم باعادة تشغيل البوت لك ، ان استمرت يرجى التواصل معنا و نقدر مجهودكم مقدما . "
  )
  Bot.runCommand("/start")
  return
}

if(temp === "Youtube") {

const link = "🤝 اساسيات قواعد اللغة العربية على اليوتيوب\n\nhttps://youtube.com/playlist?list=PLoYPO0sy0TTAY-pP6hkXvRwn9KdojtmEh\n\n🤝 ملخص كان و أخواتها على اليوتيوب\n\nhttps://youtu.be/CLzEQpK0zlc\n\n🤝 ملخص ان و أخواتها على اليوتيوب\n\nhttps://youtu.be/8UC0sNp2tG8\n\n🤝 ملخص ظن و أخواتها على اليوتيوب\n\nhttps://youtu.be/TP5UqSL1mNE\n\n🤝 ملخص كاد و أخواتها على اليوتيوب\n\nhttps://youtu.be/TD50082ZaHs";

Bot.sendMessage(link)

} else if(temp === "Test Me") {

Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/874")

} else {

ForwardMessage("https://t.me/english%5Ffor%5Fnursing/801")

}
