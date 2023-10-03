/*CMD
  command: Medical Terminology
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
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1254")
  
}

if(temp === "Translation") {
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1264")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1329")
  
}

if(temp === "Short") {
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/1264")
  
}

if(temp === "Youtube") {
  
  const msg1 = "التسجيل الصوتي الاول"
  const msg2 = "التسجيل الصوتي الثاني"
  const msg3 = "المحاضرة على اليوتيوب"
  const part1 = "https://t.me/biochemistry%5Fnursing/1349";
  const part2 = "https://t.me/biochemistry%5Fnursing/1350";
  const yout = "https://youtu.be/lMmD56F-vWU"
  const newLine = "\n"
  
  Bot.sendMessage(msg1+newLine+newLine+part1+newLine+newLine+msg2+newLine+newLine+part2+newLine+newLine+msg3+newLine+newLine+yout)
  
}
