/*CMD
  command: علم الأدوية الكورس الثاني
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


if(temporary === "Original") {
  
  
ForwardMessage("https://t.me/abcdefehduauqu/3308" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3310" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3312" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3314" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3316" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3318" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3321" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3323" , user.telegramid)
  
}

if(temporary === "Translation") {
  


ForwardMessage("https://t.me/abcdefehduauqu/3309" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3311" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3313" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3315" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3317" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3320" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3322" , user.telegramid)
  
Bot.sendMessage("ترجمة محاضرة المضادات الحيوية غير متوفرة حاليا ، قريبا ان شاء الله")
  
}

if(temporary === "lectureYA") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }
  
  if(temporary === "Old") {
    
    ForwardMessage("https://t.me/kufa2023/1059", user.telegramid)
    
  }
  
  if(temporary === "Short") {
  
  ForwardMessage("https://t.me/kufa2023/1058", user.telegramid)

}

