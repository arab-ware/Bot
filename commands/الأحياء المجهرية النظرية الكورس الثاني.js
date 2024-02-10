/*CMD
  command: الأحياء المجهرية النظرية الكورس الثاني
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
  
  ForwardMessage("https://t.me/abcdefehduauqu/2761" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2762" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2763" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2764" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2765" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2766" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2767" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2768" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2769" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2770" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2771" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2772" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2773" , user.telegramid)
  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/abcdefehduauqu/3325" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3326" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3335" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3324" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3330" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3327" , user.telegramid)
  
}

if(temporary === "lectureYA") {
    
ForwardMessage("https://t.me/abcdefehduauqu/3329" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3333" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3336" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3337" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3338" , user.telegramid)
    
  }
  
  if(temporary === "Old") {
    
 ForwardMessage("https://t.me/kufa2023/1022" , user.telegramid)
 ForwardMessage("https://t.me/kufa2023/1027" , user.telegramid)
 ForwardMessage("https://t.me/kufa2023/1029" , user.telegramid)
    
  }

