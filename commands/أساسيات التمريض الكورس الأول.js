/*CMD
  command: أساسيات التمريض الكورس الأول
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

const L1 = "Holistic Care"
const L2 = "Asepsis and infection control"
const L3 = "Admission"
const L4 = "Activity and body mechanics"
const L5 = "Wound Care"
const L6 = "Vital Signs"
const L7 = "Medication Administration"
const L8 = "Injection"
const L9 = "IV Cannulation"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if(temporary === "Original") {
  
  Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+L8+line+L9+line+exit+line+exit_only , msg)
  
}

if(temporary === "Translation") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+L8+line+L9+line+exit+line+exit_only , msg)
  
}

if(temporary === "Test Me") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+L8+line+L9+line+exit+line+exit_only , msg)
  
}

if(temporary === "Old") {
  
  ForwardMessage("https://t.me/kufa2023/802")
  
}

if(temporary === "Youtube") {
  Bot.sendKeyboard(L1+line+L2+line+L5+line+L6+line+L8+line+L9+line+exit+line+exit_only , msg)
  
}
