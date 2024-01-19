/*CMD
  command: المحاضرات الأصلية
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

const nurse_basic = "أساسيات التمريض الكورس الأول"
const nurse_basic_two = "أساسيات التمريض الكورس الثاني"
const physiology = "فسلجة جسم الإنسان"
const practical_physiology = "الجانب العملي من فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const english = "اللغة الإنجليزية الكورس الأول"
const english_two = "اللغة الإنجليزية الكورس الثاني"
const arabic = "اللغة العربية"
const computer_one = "علم الكمبيوتر - الجانب النظري"
const computer_two = "علم الكمبيوتر - الجانب العملي"
const close = "إغلاق و رجوع"
const stageOne = "المرحلة الأولى"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"
const anatomy = "تشريح جسم الإنسان"
const practical_anatomy = "تشريح جسم الإنسان الجانب العملي"
const ethics = "أخلاقيات التمريض"
const biochemistry = "الكيمياء الحياتية"
const lab_biochemistry = "الكيمياء الحياتية الجانب العملي"
const returnToCourse = "الكورس الاول"
const returnToCourseTwo = "الكورس الثاني"

Bot.setProperty("Type" + user.id , "Original" , "string")

const a = "المحاضرات الأصلية"

Bot.setProperty("command" + user.id , a , "string")

const hga = "" + Bot.getProperty("course" + user.id)

if (
  Bot.getProperty("course" + user.id) == null ||
  Bot.getProperty("course" + user.id) == ""
) {
  Bot.sendMessage(
    "هنالك مشكلة سنقوم باعادة تشغيل البوت لك ، ان استمرت يرجى التواصل معنا و نقدر مجهودكم مقدما . "
  )
  Bot.runCommand("/start")
  return
}

if(hga === "الكورس الأول") {
  
  Bot.sendKeyboard(nurse_basic + x + anatomy + x + practical_anatomy + x + biochemistry + x + lab_biochemistry + x + computer_one + x + english + x + ethics + x + close + x + stageOne + x + returnToCourse , msg)
  
} else {


Bot.sendKeyboard(nurse_basic_two + x + physiology + x + medical_terminology + x + practical_physiology + x + english_two + x + arabic + x + computer_two + x + close + x + stageOne + x + returnToCourseTwo , msg)

}

