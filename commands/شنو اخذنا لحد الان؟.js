/*CMD
  command: شنو اخذنا لحد الان؟
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

const an1 = "تمريض البالغين الكورس الأول"
const an2 = "تمريض البالغين الكورس الثاني"
const mbt1 = "الأحياء المجهرية النظرية الكورس الأول"
const mbt2 = "الأحياء المجهرية النظرية الكورس الثاني"
const mbp1 = "الأحياء المجهرية العملية الكورس الأول"
const en_s2 = "اللغة الإنجليزية - المرحلة الثانية"
const ha_pe = "التقييم الصحي - الفحص البدني"
const cpc1 = "علم الكمبيوتر - الجانب العملي - الكورس الأول"
const cpc2 = "علم الكمبيوتر - الجانب العملي - الكورس الثاني"
const close = "إغلاق و رجوع"
const stageOne = "المرحلة الثانية"
const x = "\n"
const msg = "قم باختيار المادة لو سمحت"
const pp = "الفسلجة المرضية"
const pc1 = "علم الأدوية الكورس الأول"
const pc2 = "علم الأدوية الكورس الثاني"
const returnToCourse = "كورس اول"
const returnToCourseTwo = "كورس ثاني"

Bot.setProperty("Type" + user.id , "current" , "string")
  
  Bot.sendKeyboard(an1 + x + mbt1 + x + mbp1 + x + ha_pe + x + pc1 + x + close, msg)
