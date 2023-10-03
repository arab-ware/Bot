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


if(temporary === "Original") {
  
  ForwardMessage("https://t.me/abcdefehduauqu/2790" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2791" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2792" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2793" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2794" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2795" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2796" , user.telegramid)
  
}

if(temporary === "Translation") {
  
Bot.sendMessage("غير متوفرة حاليا ، قريبا ان شاء الله")
  
}

if(temporary === "lectureYA") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }
  
  if(temporary === "Old") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }

