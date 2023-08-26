/*CMD
  command: اختصار تمريض البالغين الكورس الثاني
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

ForwardMessage("https://t.me/abcdefehduauqu/2718", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2719", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2720", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2721", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2722", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2723", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2724", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2725", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2726", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2727", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2728", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2730", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2729", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2731", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2732", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2733", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2734", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2735", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2736", user.telegramid)

