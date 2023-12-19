/*CMD
  command: كورس اول
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

const org = "الملازم الأصلية"
const tnl = "الملازم المترجمة"
const smr = "اسئلة عمل طلبة"
const question = "المصادر الرسمية لتمريض البالغين"
const youtube = "تسجيلات صوتية و روابط يوتيوب"
const oldQ = "اسئلة دفعات سابقة"
const shortS2Files = "ملخصات المرحلة الثانية"
const close = "إغلاق و رجوع"
const close2 = "المرحلة الثانية"
const drs = "الحذوفات"
const msg = "قم باختيار ما تريده لو سمحت"
const x = "\n"
Bot.setProperty("command" + user.id , "كورس اول","string")
Bot.setProperty("course" + user.id , "الكورس الأول" , "string")
Bot.sendKeyboard(org + x + tnl + x + oldQ + x + smr + x + question + x + shortS2Files + x + youtube + x + close + x + close2 , msg)
