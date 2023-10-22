/*CMD
  command: تشريح جسم الإنسان الجانب العملي
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

const L1 = "LabIntroduction"
const L2 = "Cell"
const L3 = "Bone"
const L4 = "Connective Tissue"
const L5 = "Body Surfaces"
const L6 = "Body Cavities"
const L7 = "X"
const L8 = "X"
const L9 = "X"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/anatomy_kufa/2119")
ForwardMessage("https://t.me/anatomy_kufa/2121")
ForwardMessage("https://t.me/anatomy_kufa/2123")
ForwardMessage("https://t.me/anatomy_kufa/2125")
ForwardMessage("https://t.me/anatomy_kufa/2127")
ForwardMessage("https://t.me/anatomy_kufa/2129")
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/anatomy_kufa/2120")
ForwardMessage("https://t.me/anatomy_kufa/2122")
ForwardMessage("https://t.me/anatomy_kufa/2124")
ForwardMessage("https://t.me/anatomy_kufa/2126")
ForwardMessage("https://t.me/anatomy_kufa/2128")
ForwardMessage("https://t.me/anatomy_kufa/2130")
  
}

if(temporary === "Old") {
  
  ForwardMessage("https://t.me/anatomy_kufa/2131")
  ForwardMessage("https://t.me/anatomy_kufa/2132")
  
}

if(temporary === "Short") {
  
  ForwardMessage("https://t.me/kufa2023/831")
  
}
