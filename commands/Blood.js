/*CMD
  command: Blood
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

if(temp === "Original") {
  
ForwardMessage("https://t.me/anatomy%5Fkufa/1639")
  
}

if(temp === "Translation") {
  
  ForwardMessage("https://t.me/anatomy%5Fkufa/1640")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/anatomy%5Fkufa/1742")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول : "
  const msg2 = "الجزء الثاني : "
  const x = "\n"
  const part1 = "https://youtu.be/lGz-XqYpAsM"
  const part2 = "https://youtu.be/B8EetIegVZU"
  Bot.sendMessage(msg1+x+x+part1+x+x+msg2+x+x+part2)
  
}

if(temp === "Short") {
  
  ForwardMessage("https://t.me/anatomy%5Fkufa/1743")
  
}
