/*CMD
  command: أسئلة اختبار
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
const physiology = "فسلجة جسم الإنسان"
const practical_physiology = "الجانب العملي من فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const arabic = "اللغة العربية"
const english = "اللغة الإنجليزية الكورس الأول"
const english_two = "اللغة الإنجليزية الكورس الثاني"
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
Bot.setProperty("Type" + user.id , "Test Me" , "string")

const a = "أسئلة اختبار"

Bot.setProperty("command" + user.id , a , "string")

const hga = "" + Bot.getProperty("course" + user.id)

if(hga === "الكورس الأول") {
  
  Bot.sendKeyboard(nurse_basic + x + anatomy + x + biochemistry + x + lab_biochemistry + x + close + x + stageOne , msg)
    
} else {

Bot.sendKeyboard(nurse_basic_two + x + physiology + x + practical_physiology + x + medical_terminology + x + computer_two + x + arabic + x + english_two + x + close + x + stageOne , msg)

}
