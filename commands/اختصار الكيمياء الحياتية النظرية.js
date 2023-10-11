/*CMD
  command: اختصار الكيمياء الحياتية النظرية
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

ForwardMessage("https://t.me/kufa_nursing_translation/129",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/131",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/133",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/135",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/137",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
ForwardMessage("https://t.me/kufa2023/800",user.telegramid)
ForwardMessage("https://t.me/kufa2023/839",user.telegramid)
ForwardMessage("https://t.me/kufa2023/823",user.telegramid)
ForwardMessage("https://t.me/kufa2023/824",user.telegramid)
ForwardMessage("https://t.me/kufa2023/825",user.telegramid)
ForwardMessage("https://t.me/kufa2023/826",user.telegramid)
ForwardMessage("https://t.me/kufa2023/827",user.telegramid)
Bot.sendMessage("اما بخصوص التسجيلات الصوتية و الفيديوية و الإختبارات عمل الطلبة و باقي الامور فهي متوفرة في البوت و المجموعة")
ForwardMessage("https://t.me/kufa2023/830",user.telegramid)
