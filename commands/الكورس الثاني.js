/*CMD
  command: الكورس الثاني
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

const org = "المحاضرات الأصلية"
const tnl = "المحاضرات المترجمة"
const smr = "الملخصات"
const question = "أسئلة اختبار"
const youtube = "المحاضرات على اليوتيوب"
const record =  "التسجيلات الصوتية و الفيديوية"
const about_us = "قائمة المجموعات و القنوات الخاصة بالطلبة المرتبطة بالدراسة"
const old = "الأسئلة القديمة للدفعات السابقة"
const removedL = "الحذوفات"
const finalExams = "جدول_الامتحانات_النظرية_النهائية"
const close = "إغلاق و رجوع"
const msg = "قم باختيار ما تريده لو سمحت"
const x = "\n"
Bot.setProperty("command" , "الكورس الثاني","string")
Bot.sendKeyboard(org + x + tnl + x + smr + x + question + x + old + x + youtube + x + record + x + removedL + x + about_us + x + finalExams + x + close , msg)
