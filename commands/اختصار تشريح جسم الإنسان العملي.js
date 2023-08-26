/*CMD
  command: اختصار تشريح جسم الإنسان العملي
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
ForwardMessage("https://t.me/kufa_nursing_translation/139",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/141",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/143",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/145",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/147",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/149",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة ، تنبيه هام جدا ، محاضرتا سطوح الجسم و تجاويف الجسم خاصة بالدراسة المسائية")
ForwardMessage("https://t.me/anatomy_kufa/2131",user.telegramid)
ForwardMessage("https://t.me/anatomy_kufa/2132",user.telegramid)
Bot.sendMessage("أعلاه اسئلة شهرية و نهائية مع الحل الصحيح و الترجمة")
ForwardMessage("https://t.me/kufa2023/831",user.telegramid)
