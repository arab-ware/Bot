/*CMD
  command: اختصار المصطلحات الطبية
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

ForwardMessage("https://t.me/kufa_nursing_translation/34",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/79",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/85",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/59",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/78",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/91",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/92",user.telegramid)
Bot.sendMessage("أعلاه الملفات المترجمة")
ForwardMessage("https://t.me/biochemistry_nursing/1702",user.telegramid)
ForwardMessage("https://t.me/kufa2023/778",user.telegramid)
Bot.sendMessage("باقي الامور في مجموعتنا الدراسية و البوت من روابط فيديوات اليوتيوب و اسئلة اختبار و الحذوفات الى اخره💚")
