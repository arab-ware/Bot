/*CMD
  command: مصادر علمية و ملفات جامعية
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

ForwardMessage("https://t.me/abcdefehduauqu/2810", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2687", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2951", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3014", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3016", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3017", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2689", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2660", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2661", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2662", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2663", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2664", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2665", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2666", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2667", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2668", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2669", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2670", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2672", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2673", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2674", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2675", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2676", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2677", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2678", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2680", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2681", user.telegramid)

