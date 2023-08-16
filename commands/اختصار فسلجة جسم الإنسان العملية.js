/*CMD
  command: اختصار فسلجة جسم الإنسان العملية
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
        
        Api.forwardMessage({
            from_chat_id: from_chat_id,
            chat_id: chat_id,
            message_id: message_id
        });
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}

ForwardMessage("https://t.me/anatomy_kufa/1849",user.telegramid)
ForwardMessage("https://t.me/anatomy_kufa/1906",user.telegramid)
Bot.sendMessage("https://t.me/anatomy_kufa/1905")
Bot.sendMessage("https://t.me/anatomy_kufa/1923")
Bot.sendMessage("https://t.me/anatomy_kufa/1927")
