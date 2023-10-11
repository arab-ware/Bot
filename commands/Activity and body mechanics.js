/*CMD
  command: Activity and body mechanics
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
  
  ForwardMessage("https://t.me/nursebasics/2786")
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/nursebasics/2787")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/nursebasics/2219")
  
}


