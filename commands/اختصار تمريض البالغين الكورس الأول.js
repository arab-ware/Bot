/*CMD
  command: اختصار تمريض البالغين الكورس الأول
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
  const matches = link.match(/\/(\w+)\/(\d+)/)
  if (matches && matches.length === 3) {
    const from_chat_id = `@${matches[1]}`
    const message_id = parseInt(matches[2])

    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      }
    })
  } else {
    Bot.sendMessage(
      "حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer"
    )
  }
}


ForwardMessage("https://t.me/abcdefehduauqu/2710", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3006", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2708", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2702", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2706", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3193", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2712", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2716", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2714", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3277", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3004" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3268", user.telegramid)
