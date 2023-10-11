/*CMD
  command: موازي
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
  const resultLink = link.replaceAll("%5F" , "_")
    const matches = resultLink.match(/\/(\w+)\/(\d+)/);
    if (matches && matches.length === 3) {
        const from_chat_id = `@${matches[1]}`;
        const message_id = parseInt(matches[2]);
        

HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: user.telegramid,
        message_id: message_id
      }
    })
        
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}
  ForwardMessage("https://t.me/abcdefehduauqu/2945" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2946" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2947" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2948" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2949" , user.telegramid)

const userInfo = user.id + "\n" + user.telegramid
const messageInfo = "تم استعمال البوت 🌿 من قبل \n"

Bot.sendMessageToChatWithId(1318999805,messageInfo + userInfo)
