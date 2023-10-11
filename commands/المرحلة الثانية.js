/*CMD
  command: المرحلة الثانية
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

const msg = "قم باختيار الفصل الدراسي لو سمحت"
const a = "كورس اول"
const b = "كورس ثاني"
const c = "إغلاق و رجوع"
Bot.sendKeyboard(a+"\n"+b+"\n"+c,msg)

