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
  group: 
CMD*/

function ForwardMessage(link) {
  const resultLink = link.replaceAll("%5F" , "_")
    const matches = resultLink.match(/\/(\w+)\/(\d+)/);
    if (matches && matches.length === 3) {
        const from_chat_id = `@${matches[1]}`;
        const message_id = parseInt(matches[2]);
        

HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: user.telegramid,
        message_id: message_id
      }
    })
        
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}


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
  
ForwardMessage("https://t.me/kufa2023/777")
ForwardMessage("https://t.me/kufa2023/787")
Bot.sendMessage("اسئلة امتحان الشهر الثاني مع الحل"+"\n"+"https://t.me/kufa2023/742")
ForwardMessage("https://t.me/kufa2023/790")

} else if(temp === "Short") {

Bot.sendKeyboard(blood+x+hormones+x+heart+x+respiratory+x+digestive+x+close+x+close_only,msg)

} else if(temp === "Original") {

ForwardMessage("https://t.me/anatomy_kufa/1447")
ForwardMessage("https://t.me/anatomy_kufa/1639")
ForwardMessage("https://t.me/anatomy_kufa/1750")
ForwardMessage("https://t.me/anatomy_kufa/1749")
ForwardMessage("https://t.me/anatomy_kufa/1779")
ForwardMessage("https://t.me/anatomy_kufa/1846")

} else if(temp === "Translation") {

ForwardMessage("https://t.me/anatomy_kufa/1448")
ForwardMessage("https://t.me/anatomy_kufa/1640")
ForwardMessage("https://t.me/anatomy_kufa/1752")
ForwardMessage("https://t.me/anatomy_kufa/1751")
ForwardMessage("https://t.me/anatomy_kufa/1780")
ForwardMessage("https://t.me/anatomy_kufa/1847")

} else {

Bot.sendKeyboard(nervous+x+blood+x+hormones+x+heart+x+respiratory+x+digestive+x+close+x+close_only,msg)

}
