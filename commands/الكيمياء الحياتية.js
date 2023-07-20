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
CMD*/

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
  
  Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Translation") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Test Me") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Old") {
  
  Bot.sendMessage("https://t.me/kufa2023/800");
  
}

if(temporary === "Youtube") {
  
Bot.sendKeyboard(L1+line+L2+line+L3+line+L4+line+L5+line+exit+line+exit_only , msg)
  
}

if(temporary === "Short") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/141");
  
}
