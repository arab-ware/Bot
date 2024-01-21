/*CMD
  command: علم الكمبيوتر - الجانب العملي - الكورس الأول
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

const L1 = "Digestive System - Adult Nursing"
const L2 = "Blood Disorders - Adult Nursing"
const L3 = "Respiratory System - Adult Nursing"
const L4 = "Cancer Management - Adult Nursing"
const L5 = "Nursing Process - Adult Nursing"
const L6 = "Ulcerative colitis And Crohn’s Disease - Adult Nursing"
const L7 = "Liver Disease - Adult Nursing"
const L8 = "Ischemic Heart Disease - Adult Nursing"
const L9 = "Gastritis - Adult Nursing"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if (temporary === "lectureYA") {
  ForwardMessage("https://t.me/abcdefehduauqu/3134", user.telegramid)
} else if (temporary === "students") {
  Bot.sendMessage(
    "قريبا ، حاليا فقط مادة الأحياء المجهرية النظرية و مادة التقييم"
  )
} else if (temporary === "Original") {
  ForwardMessage("https://t.me/abcdefehduauqu/3211", user.telegramid)
} else if (temporary === "Translation") {
  ForwardMessage("https://t.me/abcdefehduauqu/3212", user.telegramid)
} else if (temporary === "current") {
  ForwardMessage("https://t.me/abcdefehduauqu/3212", user.telegramid)
} else {
  Bot.sendMessage("قريبا ان شاء الله عز و جل")
}

