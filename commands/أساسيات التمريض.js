/*CMD
  command: أساسيات التمريض
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

const temp = "" + Bot.getProperty("Type"+user.id)

const practical = "الجانب العملي من أساسيات التمريض"
const L1 = "Rest And Sleep"
const L2 = "Nutrition"
const L3 = "Fluid And Electrolyte - Acid And Base Balance"
const L4 = "Oxygenation And Mechanism Of Breathing"
const L5 = "Urinary Elimination"
const L6 = "Abnormal Urinary Elimination"
const L7 = "Bowel Elimination"
const L8 = "Perioperative Nursing Care"
const L9 = "Pain Management"
const close = "إغلاق و رجوع"
const close_only = "إغلاق فقط"
const x = "\n"
const msg = "قم باختيار المحاضرة لو سمحت"

if(temp === "Record") {
  
 const link = "يوجد فقط اولا ) محاضرة السيطرة على الألم\n\nو هذا الرابط ✅\n\nhttps://t.me/kufa2023/657\n\nو ثانيا ) محاضرة السوائل :\n\nhttps://t.me/kufa2023/691\n\nو ثالثا ) محاضرة العناية التمريضية الجراحية :\n\nhttps://t.me/kufa2023/749\n\nفي حالة كان هنالك المزيد غير هذه عندكم => ارسلوها لنا لكي ننشرها\n\n@programmer_ameer";
 
 Bot.sendMessage(link)
 
 } else if(temp === "YouDontHaveToRead") {

const resultDd = "المحاضرة الخامسة و السادسة (الإخراج البولي الطبيعي و غير الطبيعي) + المحاضرة الثالثة (السوائل) تم حذفها كلها ✅\n\nاما بخصوص محاضرة Bowel elimination السابعة هنالك اجزاء منها و ليس كلها و هذه الملزمة بعد التعديل : \n\nhttps://t.me/kufa2023/726";

Bot.sendMessage(resultDd)

 } else if (temp === "Old") {
 
 Bot.sendMessage("https://t.me/kufa2023/779")
 
 } else if(temp === "Youtube") {

Bot.sendKeyboard(L1+x+L2+x+L3+x+L4+x+L5+x+L6+x+practical+x+close+x+close_only,msg)

} else if(temp === "Test Me") {

Bot.sendKeyboard(L1+x+L2+x+L3+x+L4+x+L5+x+L6+x+L7+x+L8+x+L9+x+close+x+close_only,msg)

} else {

Bot.sendKeyboard(L1+x+L2+x+L3+x+L4+x+L5+x+L6+x+L7+x+L8+x+L9+x+close+x+close_only,msg)

}
