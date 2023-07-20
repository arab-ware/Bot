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
CMD*/

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
  
  Bot.sendKeyboard(L1 + line + L2 + line + L3 + line + L4 + line + L5 + line + L6 + line + exit + line + exit_only , msg)
  
}

if(temporary === "Translation") {
  
  Bot.sendKeyboard(L1 + line + L2 + line + L3 + line + L4 + line + L5 + line + L6 + line + exit + line + exit_only , msg)
  
}

if(temporary === "Old") {
  
Bot.sendMessage("أسئلة شهرية مع الحل :\nhttps://t.me/anatomy%5Fkufa/2131\nأسئلة الفاينل مع الحل :\nhttps://t.me/anatomy%5Fkufa/2132")
  
}
