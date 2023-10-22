/*CMD
  command: الاختصارات - المرحلة الثانية
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

const one = "اختصار تمريض البالغين الكورس الأول"
const two = "اختصار تمريض البالغين الكورس الثاني"
const three = "اختصار الأحياء المجهرية النظرية الكورس الأول"
const four = "اختصار الأحياء المجهرية النظرية الكورس الثاني"
const five = "اختصار الأحياء المجهرية العملية الكورس الأول"
const six = "اختصار علم الأدوية الكورس الأول"
const seven = "اختصار علم الأدوية الكورس الثاني"
const eight = "اختصار مادة التقييم"
const nine = "اختصار مادة الفسلجة المرضية"
const ten = "اختصار مادة اللغة الإنجليزية"
const eleven = "اختصار مادة علم الكمبيوتر"
const close = "إغلاق و رجوع"
const x = "\n"
const msg = "قم باختيار ما تريده لو سمحت"

Bot.sendKeyboard(close + x + one + x + two + x + three + x + four + x + five + x + six + x + seven + x + eight + x + nine + x + ten + x + eleven , msg)



const userInfo = user.id + "\n" + user.telegramid
const messageInfo = "تم استعمال البوت من قبل \n"

Bot.sendMessageToChatWithId(1318999805,messageInfo + userInfo)
