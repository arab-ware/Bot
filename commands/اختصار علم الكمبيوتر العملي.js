/*CMD
  command: اختصار علم الكمبيوتر العملي
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

function ForwardMessage(link, chat_id) {
    const matches = link.match(/\/(\w+)\/(\d+)/);
    if (matches && matches.length === 3) {
        const from_chat_id = `@${matches[1]}`;
        const message_id = parseInt(matches[2]);
        

HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      }
    })
        
    } else {
        Bot.sendMessage("حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer")
    }
}

ForwardMessage("https://t.me/kufa_nursing_translation/40",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/67",user.telegramid)
ForwardMessage("https://t.me/kufa_nursing_translation/93",user.telegramid)
const link3 = "محاضرات Microsoft Word الفيديوية :\n\n🤝 شرح استاذ المادة الجزء الاول - نظري فقط\n\nhttps://youtu.be/mId6OP-Z-Ys\n\n🤝 شرح استاذ المادة الجزء الثاني - نظري فقط\n\nhttps://youtu.be/mL32mqBs9pY\n\n🤝 شرح استاذ المادة الجزء الثالث - نظري فقط\n\nhttps://youtu.be/dfJzauQInoQ\n\n🤝 شرح خارجي للبرنامج - تطبيق عملي\n\nhttps://youtube.com/playlist?list=PL1d%5Fpoq9IYFs-VbDN0h0OwbHfcfU-ljNe\n\nمحاضرات Microsoft PowerPoint الفيديوية :\n\n🤝 شرح استاذ المادة - نظري فقط\n\nhttps://youtu.be/EiVbOiyTkLo\n\n🤝 شرح خارجي شامل عملي\n\nhttps://youtu.be/po70jHtTskI";
  Bot.sendMessage(link3)
  Bot.sendMessage("https://t.me/kufa2023/793")
  Bot.sendMessage("https://t.me/kufa2023/686")
