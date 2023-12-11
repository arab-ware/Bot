/*CMD
  command: اختصار الأحياء المجهرية العملية الكورس الأول
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

ForwardMessage("https://t.me/abcdefehduauqu/3072" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3073" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2783" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3022" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2784" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2909" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2785" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2910" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2786" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2911" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2787" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2912" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2788" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2931" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2789" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2913" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3186" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3187" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3184" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3185" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3188" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3189" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3204" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3205" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3216" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3217" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3218" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3219" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3225" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3226" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3234" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3235" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3250" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3252" , user.telegramid)
