/*CMD
  command: الجانب العملي من فسلجة جسم الإنسان
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


const temp = "" + Bot.getProperty("Type" + user.id)

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

if(temp === "Original") {
  
  ForwardMessage("https://t.me/anatomy%5Fkufa/1849")
  
} else if(temp === "Translation") {

ForwardMessage("https://t.me/anatomy%5Fkufa/1849")

} else if(temp === "Test Me") {

Bot.sendMessage("https://t.me/anatomy%5Fkufa/1905")

} else if(temp === "Old") {

Bot.sendMessage("https://t.me/anatomy%5Fkufa/1927")

} else if(temp === "Short") {

ForwardMessage("https://t.me/anatomy%5Fkufa/1906")

} else {



}
