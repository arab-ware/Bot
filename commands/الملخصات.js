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

const nurse_basic = "أساسيات التمريض الكورس الأول"
const nurse_basic_two = "أساسيات التمريض الكورس الثاني"
const practical_nurse_basic = "الجانب العملي من أساسيات التمريض"
const physiology = "فسلجة جسم الإنسان"
const practical_physiology = "الجانب العملي من فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const english = "اللغة الإنجليزية الكورس الأول"
const english_two = "اللغة الإنجليزية الكورس الثاني"
const computer = "علم الكمبيوتر - الجانب العملي"
const close = "إغلاق و رجوع"
const stageOne = "المرحلة الأولى"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"
const anatomy = "تشريح جسم الإنسان"
const practical_anatomy = "تشريح جسم الإنسان الجانب العملي"
const ethics = "أخلاقيات التمريض"
const biochemistry = "الكيمياء الحياتية"
const lab_biochemistry = "الكيمياء الحياتية الجانب العملي"
const a = "الملخصات"
const returnToCourse = "الكورس الاول"
const returnToCourseTwo = "الكورس الثاني"

Bot.setProperty("Type" + user.id , "Short" , "string")

Bot.setProperty("command" + user.id , a , "string")

const hga = "" + Bot.getProperty("course" + user.id)

if(hga === "الكورس الأول") {
  
  Bot.sendKeyboard(anatomy + x + biochemistry + x + lab_biochemistry + x + english + x + practical_nurse_basic + x + practical_anatomy + x + x + close + x + stageOne + x + returnToCourse , msg)
    
} else {


Bot.sendKeyboard(physiology + x + practical_physiology + x + medical_terminology + x + english_two + x + computer + x + practical_nurse_basic + x + close + x + stageOne + x + returnToCourseTwo , msg)

}
