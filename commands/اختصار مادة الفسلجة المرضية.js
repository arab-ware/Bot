/*CMD
  command: اختصار مادة الفسلجة المرضية
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

ForwardMessage("https://t.me/abcdefehduauqu/2797" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2798" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2799" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2800" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2801" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2802" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2803" , user.telegramid)
