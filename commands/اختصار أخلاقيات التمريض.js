/*CMD
  command: اختصار أخلاقيات التمريض
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

ForwardMessage("https://t.me/kufa2023/95",user.telegramid)
ForwardMessage("https://t.me/kufa_nurse_college/436",user.telegramid)
ForwardMessage("https://t.me/kufa_nurse_college/437",user.telegramid)
ForwardMessage("https://t.me/kufa_nurse_college/438?single",user.telegramid)
ForwardMessage("https://t.me/kufa_nurse_college/439?single",user.telegramid)
ForwardMessage("https://t.me/kufa_nurse_college/440",user.telegramid)
