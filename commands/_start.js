/*CMD
  command: /start
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

const startMessageText = "بسم الله نبدأ تشغيل البوت ، نتمنى ان يكون مفيدا ، في حالة كان هنالك مشكلة في الاستخدام راسلنا على المعرف \n @programmer_ameer \n او قم بمشاهدة هذا الفيديو \n https://t.me/kufa%5Fnurse%5Fcollege/602"
const msg = "قم باختيار المرحلة الدراسية لو سمحت"
const a = "المرحلة الأولى"
const b = "المرحلة الثانية"
const c = "تقييم"
const d = "الاختصارات - المرحلة الأولى"
const e = "شنو المهم؟"
const f = "مصادر علمية و ملفات جامعية"
Bot.sendMessage(startMessageText)
Bot.sendKeyboard(a+"\n"+d+"\n"+b+"\n" + f + "\n" + c,msg)
