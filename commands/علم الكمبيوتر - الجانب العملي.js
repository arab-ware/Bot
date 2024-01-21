/*CMD
  command: علم الكمبيوتر - الجانب العملي
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


const temp = "" + Bot.getProperty("Type"+user.id)

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

if(temp === "Original") {
  
  ForwardMessage("https://t.me/kufa2023/702")
  Bot.sendMessage("أعلاه الجزء الأول من محاضرة Microsoft Word")
  ForwardMessage("https://t.me/kufa2023/703")
  Bot.sendMessage("أعلاه الجزء الثاني من محاضرة Microsoft Word")
  ForwardMessage("https://t.me/kufa2023/704")
  Bot.sendMessage("أعلاه محاضرة Microsoft PowerPoint")
  
}


if(temp === "Translation") {
  
  
  ForwardMessage("https://t.me/kufa_nursing_translation/40")
  ForwardMessage("https://t.me/kufa_nursing_translation/67")
  ForwardMessage("https://t.me/kufa_nursing_translation/93")
  

  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/kufa2023/686")
  
}

if(temp === "Short") {
  
  Bot.sendMessage("https://t.me/kufa2023/793")
  
}


if(temp === "Youtube") {
  
  const link3 = "محاضرات Microsoft Word الفيديوية :\n\n🤝 شرح استاذ المادة الجزء الاول - نظري فقط\n\nhttps://youtu.be/mId6OP-Z-Ys\n\n🤝 شرح استاذ المادة الجزء الثاني - نظري فقط\n\nhttps://youtu.be/mL32mqBs9pY\n\n🤝 شرح استاذ المادة الجزء الثالث - نظري فقط\n\nhttps://youtu.be/dfJzauQInoQ\n\n🤝 شرح خارجي للبرنامج - تطبيق عملي\n\nhttps://youtube.com/playlist?list=PL1d%5Fpoq9IYFs-VbDN0h0OwbHfcfU-ljNe\n\nمحاضرات Microsoft PowerPoint الفيديوية :\n\n🤝 شرح استاذ المادة - نظري فقط\n\nhttps://youtu.be/EiVbOiyTkLo\n\n🤝 شرح خارجي شامل عملي\n\nhttps://youtu.be/po70jHtTskI";
  
  Bot.sendMessage(link3)
  
}
