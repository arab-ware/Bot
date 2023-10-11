/*CMD
  command: اختصار أساسيات التمريض الكورس الثاني
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

ForwardMessage("https://t.me/kufa_nursing_translation/32",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/33",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/54",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/46",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/75",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/87",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/88",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/97",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/98",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
ForwardMessage("https://t.me/kufa2023/779",user.telegramid)
Bot.sendMessage("أعلاه اسئلة دفعات سابقة مع الحل الصحيح و الترجمة")
Bot.sendMessage("اما بخصوص التسجيلات الصوتية و الفيديوية و الإختبارات عمل الطلبة و باقي الامور فهي متوفرة في البوت و المجموعة")
ForwardMessage("https://t.me/kufa2023/725",user.telegramid)
ForwardMessage("https://t.me/kufa2023/726",user.telegramid)
