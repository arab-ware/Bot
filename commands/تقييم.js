/*CMD
  command: تقييم
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

function forwardMessageToTelegram(fromWhere, toWhere, messageP) {
  const b1 = toWhere === 0
  const b2 = toWhere === null
  const b3 = isNaN(toWhere)
  var b4 = isNaN(toWhere)

  if (typeof toWhere === "number") {
    b4 = false
  } else {
    b4 = true
  }

  if (b1 || b2 || b3 || b4) {
    Bot.sendMessage(
      "https://t.me/" +
        fromWhere.replace("@", "").replace("_", "%5F") +
        "/" +
        messageP
    )
  } else {
    try {
      Api.forwardMessage({
        from_chat_id: fromWhere,
        message_id: messageP,
        chat_id: toWhere
      })
    } catch (e) {
      Bot.sendMessage(
        "https://t.me/" +
          fromWhere.replace("@", "").replace("_", "%5F") +
          "/" +
          messageP
      )
    }
  }
}

const fromWhere = "@kufa_nurse_college"
const toWhere = user.telegramid
const messageP = 616

forwardMessageToTelegram(fromWhere, toWhere, messageP)

