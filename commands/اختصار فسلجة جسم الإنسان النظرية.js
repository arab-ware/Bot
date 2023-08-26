/*CMD
  command: اختصار فسلجة جسم الإنسان النظرية
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

ForwardMessage("https://t.me/kufa_nursing_translation/36",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/38",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/52",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/48",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/86",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/102",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
ForwardMessage("https://t.me/kufa2023/777",user.telegramid)
Bot.sendMessage("https://t.me/kufa2023/787")
Bot.sendMessage("https://t.me/kufa2023/742")
ForwardMessage("https://t.me/kufa2023/790",user.telegramid)
Bot.sendMessage("أعلاه اسئلة دفعات سابقة و اسئلة شهرية لنا و للدفعات السابقة مع الحل و الترجمة")
Bot.sendMessage("اما بخصوص التسجيلات الصوتية و الفيديوية و الإختبارات عمل الطلبة و باقي الامور فهي متوفرة في البوت و المجموعة")
