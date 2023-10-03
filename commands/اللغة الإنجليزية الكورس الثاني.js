/*CMD
  command: اللغة الإنجليزية الكورس الثاني
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

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/kufa2023/753")
  
}

if(temp === "Original") {
  
  ForwardMessage("https://t.me/english_for_nursing/803")
  ForwardMessage("https://t.me/english_for_nursing/810")
  ForwardMessage("https://t.me/english_for_nursing/817")
  ForwardMessage("https://t.me/english_for_nursing/836")
  
}

if(temp === "Translation") {
  
  const link2 = "المحاضرة الاولى :\n\nhttps://t.me/english%5Ffor%5Fnursing/804\n\nالمحاضرة الثانية :\n\nhttps://t.me/english%5Ffor%5Fnursing/811\n\nالمحاضرة الثالثة :\n\nhttps://t.me/english%5Ffor%5Fnursing/818\n\nالمحاضرة الرابعة :\n\nhttps://t.me/english%5Ffor%5Fnursing/837"
  
  ForwardMessage("https://t.me/english_for_nursing/804")
  ForwardMessage("https://t.me/english_for_nursing/811")
  ForwardMessage("https://t.me/english_for_nursing/818")
  ForwardMessage("https://t.me/english_for_nursing/837")
  
}

if(temp === "Record") {
  
  const link3 = "المحاضرة الاولى :\n\nhttps://t.me/kufa2023/661\n\nالمحاضرة الثانية :\n\nhttps://t.me/kufa2023/662\n\nالمحاضرة الثالثة :\n\nhttps://t.me/kufa2023/663\n\nالمحاضرة الرابعة :\n\nhttps://t.me/kufa2023/664";
  
  ForwardMessage("https://t.me/kufa2023/661")
  ForwardMessage("https://t.me/kufa2023/662")
  ForwardMessage("https://t.me/kufa2023/663")
  ForwardMessage("https://t.me/kufa2023/664")
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/english%5Ffor%5Fnursing/909")
  
}
