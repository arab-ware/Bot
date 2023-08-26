/*CMD
  command: اختصار أساسيات التمريض الكورس الأول
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

function ForwardMessage(link, chat_id) {
    const matches = link.match(/\/(\w+)\/(\d+)/);
    if (matches && matches.length === 3) {
        const from_chat_id = `@${matches[1]}`;
        const message_id = parseInt(matches[2]);
        

HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      }
    })
        
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}


ForwardMessage("https://t.me/kufa_nursing_translation/111", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/113", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/115", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/117", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/119", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/121", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/123", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/125", user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/127", user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
ForwardMessage("https://t.me/kufa2023/802",user.telegramid)
Bot.sendMessage("أعلاه اسئلة دفعات سابقة مع الترجمة و الحل")
Bot.sendMessage("اما بخصوص التسجيلات الصوتية و الفيديوية و الإختبارات عمل الطلبة و باقي الامور فهي متوفرة في البوت و المجموعة")
