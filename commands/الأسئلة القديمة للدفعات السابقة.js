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

const nurse_basic = "أساسيات التمريض الكورس الأول"
const nurse_basic_two = "أساسيات التمريض الكورس الثاني"
const physiology = "فسلجة جسم الإنسان"
const practical_physiology = "الجانب العملي من فسلجة جسم الإنسان"
const medical_terminology = "المصطلحات الطبية"
const arabic = "اللغة العربية"
const close = "إغلاق و رجوع"
const stageOne = "المرحلة الأولى"
const computer_one = "علم الكمبيوتر - الجانب النظري"
const x = "\n "
const msg = "يرجى اختيار المادة لو سمحت"
const anatomy = "تشريح جسم الإنسان"
const practical_anatomy = "تشريح جسم الإنسان الجانب العملي"
const ethics = "أخلاقيات التمريض"
const biochemistry = "الكيمياء الحياتية"
const lab_biochemistry = "الكيمياء الحياتية الجانب العملي"
Bot.setProperty("Type"+user.id,"Old","string")

const hga = "" + Bot.getProperty("course" + user.id)

if(hga === "الكورس الأول") {
  
  Bot.sendKeyboard(nurse_basic + x + anatomy + x + practical_anatomy + x + biochemistry + x + lab_biochemistry + x + ethics + x + computer_one + x + close + x + stageOne  , msg)
    
} else {

Bot.sendKeyboard(nurse_basic_two+x+physiology+x+practical_physiology+x+medical_terminology+x+arabic+x+close+x+stageOne,msg)

}
