/*CMD
  command: كورس ثاني
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

const org = "الملازم الأصلية"
const tnl = "الملازم المترجمة"
const smr = "الاسئلة التقويمية للسنين السابقة"
const question = "المصادر الرسمية للمواد التقويمية"
const youtube = "تسجيلات صوتية و روابط يوتيوب"
const oldQ = "اسئلة دفعات سابقة"
const close = "إغلاق و رجوع"
const close2 = "المرحلة الثانية"
const drs = "الحذوفات"
const msg = "قم باختيار ما تريده لو سمحت"
const x = "\n"
Bot.setProperty("command" + user.id , "كورس ثاني","string")
Bot.setProperty("course" + user.id , "الكورس الثاني" , "string")
Bot.sendKeyboard(org + x + tnl + x + smr + x + oldQ + x + question + x + youtube + x + close + x + close2 , msg)
