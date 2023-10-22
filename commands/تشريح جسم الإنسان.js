/*CMD
  command: تشريح جسم الإنسان
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
  const resultLink = link.replace("%5F" , "_")
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

const L1 = "Introduction"
const L2 = "Nervous System C1"
const L3 = "Cardiovascular System C1"
const L4 = "Integumentary System C1"
const L5 = "Respiratory System C1"
const L6 = "Reproductive System C1"
const L7 = "Digestive System C1"
const L8 = "X"
const L9 = "X"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/anatomy_kufa/2093")
ForwardMessage("https://t.me/anatomy_kufa/2096")
ForwardMessage("https://t.me/anatomy_kufa/2099")
ForwardMessage("https://t.me/anatomy_kufa/2102")
ForwardMessage("https://t.me/anatomy_kufa/2105")
ForwardMessage("https://t.me/anatomy_kufa/2108")
ForwardMessage("https://t.me/anatomy_kufa/2111")

  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/anatomy_kufa/2094")
ForwardMessage("https://t.me/anatomy_kufa/2097")
ForwardMessage("https://t.me/anatomy_kufa/2100")
ForwardMessage("https://t.me/anatomy_kufa/2103")
ForwardMessage("https://t.me/anatomy_kufa/2106")
ForwardMessage("https://t.me/anatomy_kufa/2109")
ForwardMessage("https://t.me/anatomy_kufa/2112")
  
}

if(temporary === "Test Me") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Old") {

ForwardMessage("https://t.me/kufa2023/842")
ForwardMessage("https://t.me/anatomy_kufa/2114")
ForwardMessage("https://t.me/anatomy_kufa/2115")
  
}

if(temporary === "Youtube") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Short") {
  
ForwardMessage("https://t.me/kufa2023/843")
ForwardMessage("https://t.me/kufa2023/844")
ForwardMessage("https://t.me/kufa2023/845")
ForwardMessage("https://t.me/kufa2023/846")
ForwardMessage("https://t.me/kufa2023/847")

  
}
