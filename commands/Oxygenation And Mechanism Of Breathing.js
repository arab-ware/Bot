/*CMD
  command: Oxygenation And Mechanism Of Breathing
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


const temp = "" + Bot.getProperty("Type" + user.id)

if(temp === "Original") {
  
ForwardMessage("https://t.me/nursebasics/2392")
  
}

if(temp === "Translation") {
  
  ForwardMessage("https://t.me/nursebasics/2394")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2747")
  
}

if(temp === "Youtube") {
  
  const link = "المحاضرة على اليوتيوب الجزء الاول ✅ :\n\nhttps://youtu.be/PuMnMA1adWU\n\nالمحاضرة على اليوتيوب الجزء الثاني ✅ :\n\nhttps://youtu.be/JIFcGd7eTUw\n\nالمحاضرة على اليوتيوب الجزء الثالث ✅ :\n\nhttps://youtu.be/EoC6r01Qh3A";
  
  Bot.sendMessage(link)
  
}
