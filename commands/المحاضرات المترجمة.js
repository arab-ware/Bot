/*CMD
  command: المحاضرات المترجمة
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
const computer = "علم الكمبيوتر - الجانب العملي"
const close = "إغلاق و رجوع"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"
Bot.setProperty("Type" + user.id , "Translation" , "string")

const a = "المحاضرات المترجمة"

Bot.setProperty("command" + user.id , a , "string")

Bot.sendKeyboard(nurse_basic + x + physiology + x + practical_physiology + x + medical_terminology + x + english + x + computer + x + close , msg)


