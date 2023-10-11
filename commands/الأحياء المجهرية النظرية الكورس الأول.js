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
  
  ForwardMessage("https://t.me/abcdefehduauqu/2753", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2754", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2755", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2756", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2757", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2758", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2759", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3050", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2760", user.telegramid)
  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/abcdefehduauqu/2837", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2839", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3008", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3051", user.telegramid)
Bot.sendMessage("فقط هذه مترجمة حاليا ، باقي الملازم تتوفر في قسم الملازم الأصلية و كذلك في قسم الاختصارات - المرحلة الثانية")
  
}

if(temporary === "lectureYA") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2962" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2963" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/2959" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2960" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/2961" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/3012" , user.telegramid)
    
  }
  
if(temporary === "Old") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2952" , user.telegramid)
    
  }
  
  if(temporary === "current") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2837" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2839" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3008" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3051" , user.telegramid)
    
  }

