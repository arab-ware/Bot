/*CMD
  command: الكيمياء الحياتية
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

const L1 = "Introduction And Carbohydrates"
const L2 = "Carbohydrates Metabolism"
const L3 = "Metabolic Disorders"
const L4 = "Lipids Two Parts"
const L5 = "Amino Acids And Proteins"
const L6 = "X"
const L7 = "X"
const L8 = "X"
const L9 = "X"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/biochemistry_nursing/131")
ForwardMessage("https://t.me/biochemistry_nursing/133")
ForwardMessage("https://t.me/biochemistry_nursing/135")
ForwardMessage("https://t.me/biochemistry_nursing/137")
ForwardMessage("https://t.me/biochemistry_nursing/139")
  
  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/biochemistry_nursing/132")
ForwardMessage("https://t.me/biochemistry_nursing/134")
ForwardMessage("https://t.me/biochemistry_nursing/136")
ForwardMessage("https://t.me/biochemistry_nursing/138")
ForwardMessage("https://t.me/biochemistry_nursing/140")
  
}

if(temporary === "Test Me") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Old") {
  
  ForwardMessage("https://t.me/kufa2023/800")
  
}

if(temporary === "Youtube") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Short") {
  
ForwardMessage("https://t.me/kufa2023/823")
ForwardMessage("https://t.me/kufa2023/824")
ForwardMessage("https://t.me/kufa2023/825")
ForwardMessage("https://t.me/kufa2023/826")
ForwardMessage("https://t.me/kufa2023/827")
  
}
