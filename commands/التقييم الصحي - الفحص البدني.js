/*CMD
  command: التقييم الصحي - الفحص البدني
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
  ForwardMessage("https://t.me/abcdefehduauqu/2740", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2738", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2741", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2742", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2744", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2745", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2747", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2749", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2751", user.telegramid)
}

if (temporary === "Translation") {
  ForwardMessage("https://t.me/abcdefehduauqu/2824", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2739", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2743", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2826", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2827", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2748", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2750", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2752", user.telegramid)

  Bot.sendMessage(
    "محاضرة القلب غير متوفرة ، نترجمها لاحقا ان شاء الله ، تجدون النسخة الأصلية فقط حاليا في البوت"
  )
}

if (temporary === "lectureYA") {
  ForwardMessage("https://t.me/abcdefehduauqu/2955", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2956", user.telegramid)
  
  ForwardMessage("https://t.me/abcdefehduauqu/3047", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3077", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3078", user.telegramid)
  
}

if (temporary === "Old") {
ForwardMessage("https://t.me/abcdefehduauqu/3011", user.telegramid)
}

if(temporary === "current") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2824" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2748" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2739", user.telegramid)
    
ForwardMessage("https://t.me/abcdefehduauqu/2750", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2826", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2827", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2743", user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/2752", user.telegramid)
    
  }

if(temporary === "students") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/3180", user.telegramid)
    
  }
