/*CMD
  command: التسجيلات الصوتية و الفيديوية
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

const english = "اللغة الإنجليزية"
const physiology = "فسلجة جسم الإنسان"
const nurse_basic = "أساسيات التمريض"
const x = "\n"
const close = "إغلاق و رجوع"
const msg = "قم باختيار المادة لو سمحت"
Bot.setProperty("Type"+user.id,"Record","string")

const a = "التسجيلات الصوتية و الفيديوية"

Bot.setProperty("command" + user.id , a , "string")

Bot.sendKeyboard(nurse_basic+x+english+x+physiology+x+close,msg)

