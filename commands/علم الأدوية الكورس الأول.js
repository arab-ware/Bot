/*CMD
  command: علم الأدوية الكورس الأول
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

function ForwardMessage(link) {
  const resultLink = link.replaceAll("%5F", "_")
  const matches = resultLink.match(/\/(\w+)\/(\d+)/)
  if (matches && matches.length === 3) {
    const from_chat_id = `@${matches[1]}`
    const message_id = parseInt(matches[2])

    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: user.telegramid,
        message_id: message_id
      }
    })
  } else {
    Bot.sendMessage(
      "حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer"
    )
  }
}

const temporary = "" + Bot.getProperty("Type" + user.id)

if (temporary === "Original") {
  ForwardMessage("https://t.me/abcdefehduauqu/2781", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2774", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2775", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2776", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2778", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2779", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2780", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2782", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3201", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3253", user.telegramid)
}

if (temporary === "Translation") {
  ForwardMessage("https://t.me/abcdefehduauqu/2807", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2819", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2820", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2817", user.telegramid)


  ForwardMessage("https://t.me/abcdefehduauqu/2821", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2808", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2815", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2813", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3202", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3254", user.telegramid)
}

if (temporary === "lectureYA") {
  Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
}

if (temporary === "Old") {
  ForwardMessage("https://t.me/abcdefehduauqu/3024", user.telegramid)
}

if (temporary === "current") {
  ForwardMessage("https://t.me/abcdefehduauqu/2807", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3202", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2808", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2820", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2819", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3254", user.telegramid)
}

if (temporary === "students") {
  Bot.sendMessage(
    "قريبا ، حاليا فقط مادة الأحياء المجهرية النظرية و مادة التقييم"
  )
}

