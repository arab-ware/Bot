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

ForwardMessage("https://t.me/abcdefehduauqu/2740" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2738" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2739" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2741" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2742" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2743" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2744" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2745" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2746" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2747" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2748" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2749" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2750" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2751" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2752" , user.telegramid)
