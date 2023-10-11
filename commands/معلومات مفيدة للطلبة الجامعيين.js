/*CMD
  command: معلومات مفيدة للطلبة الجامعيين
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

const but1 = "تحويل pdf إلى صور"
const but2 = "تحويل الصور إلى pdf"
const but3 = "تحويل ملف pdf صوري إلى ملف قابل للبحث و النسخ"
const but4 = "تحويل ملف pdf عاطل إلى قابل للفتح"
const but5 = "كيفية دمج ملفات pdf"
const but6 = "كيفية تقليل حجم ملف pdf"
const but7 = "كيفية إضافة حقوق إلى ملف pdf"
const but8 = "إضافة أرقام الصفحات إلى ملف pdf"
const but9 = "كيفية تحويل pdf إلى PowerPoint"
const but10 = "كيفية تحويل pdf إلى Word"
const but11 = "كيفية تحويل PowerPoint إلى pdf"
const but12 = "كيفية تحويل Word إلى pdf"
const but13 = "استخراج صورة معينة ضمن صفحة pdf"
const but14 = "إغلاق و رجوع"
const msg = "قم باختيار ما تريده لو سمحت"
const x = "\n"

Bot.sendKeyboard(but1+x+but2+x+but3+x+but4+x+but5+x+but6+x+but7+x+but8+x+but9+x+but10+x+but11+x+but12+x+but13+x+but14 , msg)

const userInfo = user.id + "\n" + user.telegramid
const messageInfo = "تم استعمال البوت من قبل \n"

Bot.sendMessageToChatWithId(1318999805,messageInfo + userInfo)
