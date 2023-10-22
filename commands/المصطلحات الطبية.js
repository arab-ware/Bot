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


const medical = "Medical Terminology"
const cardiovascular = "Cardiovascular System"
const blood = "Blood System"
const respiratory = "RespiratorySystem"
const urinary = "Urinary System"
const dictionary = "القاموس الطبي"
const homework = "الواجب"
const allSubject = "مصطلحات المادة كلها"
const abbreviations = "الاختصارات"
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
 
 ForwardMessage("https://t.me/kufa2023/778")
  
} else if(temp === "Test Me") {
  
  Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+close+x+close_only,msg)
  
} else if(temp === "Short") {

Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+allSubject+x+abbreviations+x+close+x+close_only,msg)

} else if(temp === "Original") {

ForwardMessage("https://t.me/biochemistry_nursing/1254")
ForwardMessage("https://t.me/biochemistry_nursing/1255")
ForwardMessage("https://t.me/biochemistry_nursing/1256")
ForwardMessage("https://t.me/biochemistry_nursing/1346")
ForwardMessage("https://t.me/biochemistry_nursing/1507")
ForwardMessage("https://t.me/biochemistry_nursing/1626")
ForwardMessage("https://t.me/biochemistry_nursing/1629")

} else if(temp === "Translation") {

ForwardMessage("https://t.me/biochemistry_nursing/1264")
ForwardMessage("https://t.me/biochemistry_nursing/1347")
ForwardMessage("https://t.me/biochemistry_nursing/1508")
ForwardMessage("https://t.me/biochemistry_nursing/1627")
ForwardMessage("https://t.me/biochemistry_nursing/1630")
ForwardMessage("https://t.me/biochemistry_nursing/1351")
ForwardMessage("https://t.me/kufa_nursing_translation/85")

} else {

Bot.sendKeyboard(medical+x+cardiovascular+x+blood+x+respiratory+x+urinary+x+dictionary+x+homework+x+close+x+close_only,msg)

}
