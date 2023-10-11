/*CMD
  command: Cardiovascular System
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
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1346")
  
}

if(temp === "Translation") {
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1347")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1565")
  
}

if(temp === "Short") {
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1512")
  
}

if(temp === "Youtube") {
  
  const msg1 = "الجزء الاول"
  const msg2 = "الجزء الثاني"
  const part1 = "https://youtu.be/TwxQFQNeuws";
  const part2 = "https://youtu.be/KX%5FojlgK5Zs";
  const newLine = "\n"
Bot.sendMessage(msg1+newLine+newLine+part1+newLine+newLine+msg2+newLine+newLine+part2)
}
