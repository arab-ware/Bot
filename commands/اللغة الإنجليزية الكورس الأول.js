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


const temporary = "" + Bot.getProperty("Type" + user.id)

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

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/kufa2023/805")
  ForwardMessage("https://t.me/kufa2023/806")
  ForwardMessage("https://t.me/kufa2023/807")
  ForwardMessage("https://t.me/kufa2023/808")
  ForwardMessage("https://t.me/kufa2023/809")
  ForwardMessage("https://t.me/kufa2023/810")
  Bot.sendMessage("أعلاه الملازم الأصلية من مادة اللغة الإنجليزية الكورس الأول")
  
} else if(temporary === "Translation") {

ForwardMessage("https://t.me/kufa2023/805")
  ForwardMessage("https://t.me/kufa2023/806")
  ForwardMessage("https://t.me/kufa2023/812")
  ForwardMessage("https://t.me/kufa2023/813")
  ForwardMessage("https://t.me/kufa2023/814")
  ForwardMessage("https://t.me/kufa2023/815")
  Bot.sendMessage("أعلاه الملازم المترجمة من مادة اللغة الإنجليزية الكورس الأول")

} else {

Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/498")

}
