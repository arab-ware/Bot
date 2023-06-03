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
const msg = "قم باختيار الفصل الدراسي لو سمحت"
const a = "الكورس الاول"
const b = "الكورس الثاني"
const c = "تقييم"
Bot.sendMessage(startMessageText)
Bot.sendKeyboard(a+"\n"+b+"\n"+c,msg)
