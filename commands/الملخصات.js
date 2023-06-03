/*CMD
  command: الملخصات
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
const practical_physiology = "الجانب العملي من فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const english = "اللغة الإنجليزية"
const close = "إغلاق و رجوع"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"

const a = "الملخصات"

Bot.setProperty("command" + user.id , a , "string")

Bot.setProperty("Type" + user.id , "Short" , "string")
Bot.sendKeyboard(physiology + x + practical_physiology + x + medical_terminology + x + english + x + close , msg)


