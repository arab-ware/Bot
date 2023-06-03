/*CMD
  command: الحذوفات
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
const close = "إغلاق و رجوع"
const x = "\n "
const msg = "يرجى اختيار المادة لو سمحت"

Bot.setProperty("Type"+user.id,"YouDontHaveToRead","string")

Bot.sendKeyboard(nurse_basic+x+medical_terminology+x+physiology+x+close,msg)
