/*CMD
  command: الأسئلة القديمة للدفعات السابقة
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
const arabic = "اللغة العربية"
const close = "إغلاق و رجوع"
const x = "\n "
const msg = "يرجى اختيار المادة لو سمحت"

Bot.setProperty("Type"+user.id,"Old","string")

Bot.sendKeyboard(nurse_basic+x+physiology+x+practical_physiology+x+medical_terminology+x+arabic+x+close,msg)
