/*CMD
  command: اختصار تشريح جسم الإنسان النظري
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


ForwardMessage("https://t.me/kufa_nursing_translation/151",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/153",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/155",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/157",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/159",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/161",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/163",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
ForwardMessage("https://t.me/anatomy_kufa/2114",user.telegramid)
ForwardMessage("https://t.me/anatomy_kufa/2115",user.telegramid)
ForwardMessage("https://t.me/kufa2023/842",user.telegramid)
Bot.sendMessage("أعلاه اسئلة دفعتنا الشهرية و اسئلة دفعات سابقة مع الحل و الترجمة")
ForwardMessage("https://t.me/kufa2023/843",user.telegramid)
ForwardMessage("https://t.me/kufa2023/844",user.telegramid)
ForwardMessage("https://t.me/kufa2023/845",user.telegramid)
ForwardMessage("https://t.me/kufa2023/846",user.telegramid)
ForwardMessage("https://t.me/kufa2023/847",user.telegramid)
Bot.sendMessage("اما بخصوص التسجيلات الصوتية و الفيديوية و الإختبارات عمل الطلبة و باقي الامور فهي متوفرة في البوت و المجموعة")
Bot.sendMessage("بخصوص الحذوفات فقط محاضرة الجهاز التنفسي موضوع lungs الرئتين و انتبه موضوع العضلات التنفسية داخل و لا يعتبر ضمن الرئتين")
