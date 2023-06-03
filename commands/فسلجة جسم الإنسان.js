/*CMD
  command: فسلجة جسم الإنسان
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

const temp = "" + Bot.getProperty("Type" + user.id)

const nervous = "Nervous System"
const blood = "Blood"
const hormones = "Endocrine Gland Hormones"
const heart = "Heart"
const respiratory = "Respiratory System"
const digestive = "Digestive System"
const x = "\n"
const close = "إغلاق و رجوع"
const close_only = "إغلاق فقط"
const msg = "قم باختيار المحاضرة لو سمحت"

if(temp === "Record") {
  
  const link = "الجهاز العصبي :\n\nhttps://t.me/kufa2023/745\n\nالدم :\n\nhttps://t.me/kufa2023/696\n\nهرمونات الغدد الصماء :\n\nhttps://t.me/kufa2023/752\n\nالقلب :\n\nhttps://t.me/kufa2023/701\n\nالجهاز التنفسي :\n\nhttps://t.me/kufa2023/660\n\nالجهاز الهضمي :\n\nhttps://t.me/kufa2023/748\n\nاذا كانت عندكم تسجيلات صوتية اخرى   يرجى إرسالها لنا\n\n@programmer_ameer";
  
 Bot.sendMessage(link)
 
 } else if(temp === "YouDontHaveToRead") {
 
 Bot.sendMessage("https://t.me/kufa2023/735")
 
  } else if (temp === "Old") {
  
const phy66 = "أدناه اسئلة قديمة لدفعات ما قبل 2022-2023 مع الحل :\n\nhttps://t.me/kufa2023/777\n\nاما أدناه اسئلة شهرية لدفعة 2022-2023 ، الشهر الأول مع الحل :\n\nhttps://t.me/kufa2023/787\n\nاما أدناه اسئلة شهرية لدفعة 2022-2023 ، الشهر الثاني مع الحل :\n\nhttps://t.me/kufa2023/742\n\nاما أدناه اسئلة شهرية قديمة مع الحل :\n\nhttps://t.me/kufa2023/790";

Bot.sendMessage(phy66)
  
} else if(temp === "Short") {

Bot.sendKeyboard(blood+x+hormones+x+heart+x+respiratory+x+digestive+x+close+x+close_only,msg)

} else {

Bot.sendKeyboard(nervous+x+blood+x+hormones+x+heart+x+respiratory+x+digestive+x+close+x+close_only,msg)

}
