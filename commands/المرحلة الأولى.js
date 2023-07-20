/*CMD
  command: المرحلة الأولى
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

const msg = "قم باختيار الفصل الدراسي لو سمحت"
const a = "الكورس الاول"
const b = "الكورس الثاني"
const c = "إغلاق و رجوع"
Bot.sendKeyboard(a+"\n"+b+"\n"+c,msg)
