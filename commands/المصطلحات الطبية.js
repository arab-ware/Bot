/*CMD
  command: المصطلحات الطبية
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

const medical = "Medical Terminology"
const cardiovascular = "Cardiovascular System"
const blood = "Blood System"
const respiratory = "RespiratorySystem"
const urinary = "Urinary System"
const dictionary = "القاموس الطبي"
const homework = "الواجب"
const allSubject = "مصطلحات المادة كلها"
const close = "إغلاق و رجوع"
const close_only = "إغلاق فقط"
const x = "\n"
const msg = "قم باختيار المحاضرة لو سمحت"

const temp = "" + Bot.getProperty("Type" + user.id)

if(temp === "Youtube") {
  
  Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+close+x+close_only,msg)
  
} else if(temp === "YouDontHaveToRead") {

Bot.sendMessage("https://t.me/kufa2023/731")

  } else if (temp === "Old") {
 
 Bot.sendMessage("https://t.me/kufa2023/778")
  
} else if(temp === "Test Me") {
  
  Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+close+x+close_only,msg)
  
} else if(temp === "Short") {

Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+allSubject+x+close+x+close_only,msg)

} else {

Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+dictionary+x+homework+x+close+x+close_only,msg)

}
