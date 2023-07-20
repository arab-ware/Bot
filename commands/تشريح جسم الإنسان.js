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
CMD*/

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
  
  Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Translation") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Test Me") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L6+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Old") {
  
Bot.sendMessage("أسئلة الدفعات السابقة مع الحل :\nhttps://t.me/anatomy%5Fkufa/2116\nامتحان الشهر الأول + الشهر الثاني مع الحل :\nhttps://t.me/anatomy%5Fkufa/2114\nhttps://t.me/anatomy%5Fkufa/2115")
  
}

if(temporary === "Youtube") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+L7+line+exit+line+exit_only , msg)
  
}

if(temporary === "Short") {
  
Bot.sendMessage("https://t.me/anatomy%5Fkufa/2117")
  
}
