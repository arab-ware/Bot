/*CMD
  command: Introduction And Carbohydrates
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
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/131")
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/biochemistry%5Fnursing/132")
  
}



if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/234")
  
}



if(temporary === "Youtube") {
  
  Bot.sendMessage("https://www.youtube.com/watch?v=OxEdeMyzzJY&list=PLqJihfqP6EZwDsETsK0g8liVYHun4jeUD")
  
}
