/*CMD
  command: اختصار الأحياء المجهرية النظرية الكورس الأول
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


ForwardMessage("https://t.me/abcdefehduauqu/2837", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2839", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3008", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3051", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3181", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3191", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3207", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3222", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3249", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2952" , user.telegramid)

