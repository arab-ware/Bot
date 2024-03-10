/*CMD
  command: اختصار علم الأدوية الكورس الثاني
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


ForwardMessage("https://t.me/abcdefehduauqu/3308" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3309" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3310" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3311" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3312" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3313" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3314" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3315" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3318" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3320" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3321" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3322" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3323" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3380" , user.telegramid)
