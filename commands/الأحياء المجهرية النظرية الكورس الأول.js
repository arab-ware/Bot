/*CMD
  command: الأحياء المجهرية النظرية الكورس الأول
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

if (
  Bot.getProperty("Type" + user.id) == null ||
  Bot.getProperty("Type" + user.id) == ""
) {
  Bot.sendMessage(
    "هنالك مشكلة سنقوم باعادة تشغيل البوت لك ، ان استمرت يرجى التواصل معنا و نقدر مجهودكم مقدما . "
  )
  Bot.runCommand("/start")
  return
}

if (temporary === "Original") {
  ForwardMessage("https://t.me/abcdefehduauqu/2755", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2756", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2759", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3050", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2754", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3190", user.telegramid)
  
ForwardMessage("https://t.me/abcdefehduauqu/3206", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3221", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2757", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3257", user.telegramid)

}

if (temporary === "Translation") {
  ForwardMessage("https://t.me/abcdefehduauqu/2837", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2839", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3008", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3051", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3181", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3191", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3207", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3222", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3249", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3258", user.telegramid)
}

if (temporary === "lectureYA") {
  ForwardMessage("https://t.me/abcdefehduauqu/2962", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2963", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2959", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2960", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/2961", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3012", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3183", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3223", user.telegramid)
}

if (temporary === "Old") {
  ForwardMessage("https://t.me/abcdefehduauqu/2952", user.telegramid)
}

if (temporary === "current") {
  ForwardMessage("https://t.me/abcdefehduauqu/2837", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/2839", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3008", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3051", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3181", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3191", user.telegramid)

  ForwardMessage("https://t.me/abcdefehduauqu/3207", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3222", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3249", user.telegramid)
  ForwardMessage("https://t.me/abcdefehduauqu/3258", user.telegramid)
}

if (temporary === "students") {
  ForwardMessage("https://t.me/ph_kufa_nurse/428", user.telegramid)
}

if(temporary === "Short") {
  
ForwardMessage("https://t.me/kufa2023/960", user.telegramid)
  
}
