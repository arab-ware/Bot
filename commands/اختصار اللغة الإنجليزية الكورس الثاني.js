/*CMD
  command: اختصار اللغة الإنجليزية الكورس الثاني
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

ForwardMessage("https://t.me/kufa_nursing_translation/43",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/58",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/76",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/99",user.telegramid)
ForwardMessage("https://t.me/kufa2023/753",user.telegramid)
Bot.sendMessage("أعلاه الملازم المترجمة")
Bot.sendMessage("باقي الامور في مجموعتنا الدراسية \n https://t.me/english%5Ffor%5Fnursing")
