/*CMD
  command: الاختصارات - المرحلة الأولى
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

const one = "اختصار أساسيات التمريض الكورس الأول"
const two = "اختصار أساسيات التمريض الكورس الثاني"
const three = "اختصار أساسيات التمريض الجانب العملي"
const four = "اختصار تشريح جسم الإنسان النظري"
const five = "اختصار تشريح جسم الإنسان العملي"
const six = "اختصار فسلجة جسم الإنسان النظرية"
const seven = "اختصار فسلجة جسم الإنسان العملية"
const eight = "اختصار الكيمياء الحياتية النظرية"
const nine = "اختصار الكيمياء الحياتية العملية"
const ten = "اختصار اللغة العربية"
const eleven = "اختصار أخلاقيات التمريض"
const twelve = "اختصار علم الكمبيوتر النظري"
const thirteen = "اختصار علم الكمبيوتر العملي"
const fourteen = "اختصار اللغة الإنجليزية الكورس الأول"
const fifteen = "اختصار اللغة الإنجليزية الكورس الثاني"
const sixteen = "اختصار المصطلحات الطبية"
const close = "إغلاق و رجوع"
const x = "\n"
const msg = "قم باختيار ما تريده لو سمحت"

Bot.sendKeyboard(close  + x + one + x + two + x + three + x + four + x + five + x + six + x + seven + x + eight + x + nine + x + ten + x + eleven + x + twelve + x + thirteen + x + fourteen + x + fifteen + x + sixteen , msg)



const userInfo = user.id + "\n" + user.telegramid
const messageInfo = "تم استعمال البوت من قبل \n"

Bot.sendMessageToChatWithId(1318999805,messageInfo + userInfo)
