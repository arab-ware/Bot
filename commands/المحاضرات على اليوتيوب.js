/*CMD
  command: المحاضرات على اليوتيوب
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

const nurse_basic = "أساسيات التمريض"
const physiology = "فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const computer = "علم الكمبيوتر - الجانب العملي"
const arabic = "اللغة العربية"
const close = "إغلاق و رجوع"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"
Bot.setProperty("Type" + user.id , "Youtube" , "string")

const a = "المحاضرات على اليوتيوب"

Bot.setProperty("command" + user.id , a , "string")

Bot.sendKeyboard(nurse_basic + x + physiology + x + medical_terminology + x + computer + x + arabic + x + close, msg)


