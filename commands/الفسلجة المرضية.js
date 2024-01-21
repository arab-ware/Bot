/*CMD
  command: الفسلجة المرضية
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
  
  ForwardMessage("https://t.me/abcdefehduauqu/2797" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2798" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2799" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2800" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2801" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2802" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2803" , user.telegramid)
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/abcdefehduauqu/3293" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3294" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3301" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3302" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3303" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3304" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3305" , user.telegramid)
  
}

if(temporary === "lectureYA") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }
  
  if(temporary === "Old") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }

