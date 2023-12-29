/*CMD
  command: اختصار مادة التقييم
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

ForwardMessage("https://t.me/abcdefehduauqu/2824" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2748" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2739", user.telegramid)
    
ForwardMessage("https://t.me/abcdefehduauqu/2750", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2826", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2827", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2743", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2752", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3265", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3263", user.telegramid)
ForwardMessage("https://t.me/kufa2023/923", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3011" , user.telegramid)
