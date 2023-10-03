/*CMD
  command: علم الكمبيوتر - الجانب النظري
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

const L1 = "X"
const L2 = "X"
const L3 = "X"
const L4 = "X"
const L5 = "X"
const L6 = "X"
const L7 = "X"
const L8 = "X"
const L9 = "X"
const msg = "قم باختيار المحاضرة لو سمحت"
const line = "\n"

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/kufa2023/96")
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/kufa%5Fnursing%5Ftranslation/165")
  
}

if(temporary === "Old") {
  
  ForwardMessage("https://t.me/kufa2023/822")
  
}
