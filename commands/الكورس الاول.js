/*CMD
  command: الكورس الاول
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

const org = "المحاضرات الأصلية"
const tnl = "المحاضرات المترجمة"
const smr = "الملخصات"
const question = "أسئلة اختبار"
const youtube = "المحاضرات على اليوتيوب"
const about_us = "قائمة المجموعات و القنوات الخاصة بالطلبة المرتبطة بالدراسة"
const old = "الأسئلة القديمة للدفعات السابقة"
const close = "إغلاق و رجوع"
const close2 = "المرحلة الأولى"
const drs = "الحذوفات"
const msg = "قم باختيار ما تريده لو سمحت"
const x = "\n"
Bot.setProperty("command" + user.id , "الكورس الأول","string")
Bot.setProperty("course" + user.id , "الكورس الأول" , "string")
Bot.sendKeyboard(org + x + tnl + x + smr + x + question + x + old + x + youtube + x + about_us + x + drs + x + close + x + close2 , msg)
