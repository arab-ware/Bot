/*CMD
  command: اختصار علم الأدوية الكورس الأول
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

ForwardMessage("https://t.me/abcdefehduauqu/2807", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3202", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2808", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2820", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2819", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3254", user.telegramid)
ForwardMessage("https://t.me/kufa2023/926", user.telegramid)
ForwardMessage("https://t.me/kufa2023/924", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3024", user.telegramid)
