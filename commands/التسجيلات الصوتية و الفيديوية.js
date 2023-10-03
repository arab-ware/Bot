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

const english = "اللغة الإنجليزية الكورس الأول"
const english_two = "اللغة الإنجليزية الكورس الثاني"
const physiology = "فسلجة جسم الإنسان"
const nurse_basic = "أساسيات التمريض الكورس الأول"
const nurse_basic_two = "أساسيات التمريض الكورس الثاني"
const x = "\n"
const close = "إغلاق و رجوع"
const stageOne = "المرحلة الأولى"
const msg = "قم باختيار المادة لو سمحت"
const returnToCourse = "الكورس الاول"
const returnToCourseTwo = "الكورس الثاني"

Bot.setProperty("Type"+user.id,"Record","string")

const a = "التسجيلات الصوتية و الفيديوية"

Bot.setProperty("command" + user.id , a , "string")

Bot.sendKeyboard(nurse_basic_two+x+english_two+x+physiology+x+close+x+stageOne + x + returnToCourseTwo ,msg)

