/*CMD
  command: تمريض البالغين الكورس الثاني
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

const temporary = "" + Bot.getProperty("Type" + user.id)

if (
  Bot.getProperty("Type" + user.id) == null ||
  Bot.getProperty("Type" + user.id) == ""
) {
  Bot.sendMessage(
    "هنالك مشكلة سنقوم باعادة تشغيل البوت لك ، ان استمرت يرجى التواصل معنا و نقدر مجهودكم مقدما . "
  )
  Bot.runCommand("/start")
  return
}

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/abcdefehduauqu/2718", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3365", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2719", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2720", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2721", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2722", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2723", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2724", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2725", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2726", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2727", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2728", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2730", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2729", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2731", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2732", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2733", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2734", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2735", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2736", user.telegramid)

  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/abcdefehduauqu/3364" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3366" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3339" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3340" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3361" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3362" , user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3363" , user.telegramid)
  
}

if(temporary === "lectureYA") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/3348" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3349" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3350" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3351" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3352" , user.telegramid)
    
ForwardMessage("https://t.me/abcdefehduauqu/3332" , user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3357" , user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3360" , user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3373" , user.telegramid)

ForwardMessage("https://t.me/abcdefehduauqu/3369" , user.telegramid)
    
  }
  
  if(temporary === "Old") {
    
    Bot.sendMessage("غير متوفر حاليا ، قريبا ان شاء الله")
    
  }
  
  
  if(temporary === "Short") {
  
  Bot.sendMessage("قريبا ان شاء الله تعالى")

}
