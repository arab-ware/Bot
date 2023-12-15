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
  group: 
CMD*/

const temporary = "" + params

if(temporary.startsWith("bot_")) {
  
  
  if(temporary === "bot_n1") {
    
    Bot.runCommand("اختصار أساسيات التمريض الكورس الأول")
    
  } else if(temporary === "bot_n2") {
    
    Bot.runCommand("اختصار أساسيات التمريض الكورس الثاني")
    
  } else if(temporary === "bot_a1") {
    
    Bot.runCommand("اختصار تشريح جسم الإنسان النظري")
    
  } else if(temporary === "bot_a2") {
    
    Bot.runCommand("اختصار تشريح جسم الإنسان العملي")
    
  } else if(temporary === "bot_p1") {
    
    Bot.runCommand("اختصار فسلجة جسم الإنسان النظرية")
    
  } else if(temporary === "bot_p2") {
    
    Bot.runCommand("اختصار فسلجة جسم الإنسان العملية")
    
} else if(temporary === "bot_b1") {
    
    Bot.runCommand("اختصار الكيمياء الحياتية النظرية")
    
  } else if(temporary === "bot_b2") {
    
    Bot.runCommand("اختصار الكيمياء الحياتية العملية")
    
  } else if(temporary === "bot_c1") {
    
    Bot.runCommand("اختصار علم الكمبيوتر النظري")
    
  } else if(temporary === "bot_c2") {
    
    Bot.runCommand("اختصار علم الكمبيوتر العملي")
    
  } else if(temporary === "bot_e1") {
  
  Bot.runCommand("اختصار اللغة الإنجليزية الكورس الأول")
  
} else if(temporary === "bot_e2") {

Bot.runCommand("اختصار اللغة الإنجليزية الكورس الثاني")

} else if(temporary === "bot_ethics") {

Bot.runCommand("اختصار أخلاقيات التمريض")

} else if(temporary === "bot_arabic") {

Bot.runCommand("اختصار اللغة العربية")

} else if(temporary === "bot_mt") {

Bot.runCommand("اختصار المصطلحات الطبية") 

} else if(temporary === "bot_np") {

Bot.runCommand("اختصار أساسيات التمريض الجانب العملي")

} else if(temporary === "bot_s2s") {

Bot.runCommand("الاختصارات - المرحلة الثانية")

} else if(temporary === "bot_sources") {

Bot.runCommand("مصادر علمية و ملفات جامعية")

} else if(temporary === "bot_InshaaAllah") {

Bot.runCommand("موازي")

}
  
  
  
} else {




const msg = "قم باختيار ما تريده لو سمحت"
const a = "المرحلة الأولى"
const b = "المرحلة الثانية"
const c = "تقييم"
const d = "الاختصارات - المرحلة الأولى"
const e = "شنو المهم؟"
const f = "مصادر علمية و ملفات جامعية"
const g = "الاختصارات - المرحلة الثانية"
const h = "كيف استخدم البوت ؟"
const i = "معلومات مفيدة للطلبة الجامعيين"
const j = "شنو اخذنا لحد الان؟"

Bot.sendKeyboard(a+"\n"+b + "\n" + f + "\n" + i + "\n" + h + "\n" + c,msg)

}
