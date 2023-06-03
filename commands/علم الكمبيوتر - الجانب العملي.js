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
CMD*/

const temp = "" + Bot.getProperty("Type"+user.id)

if(temp === "Original") {
  
  const link = "برنامج Microsoft Word الجزء الاول :\n\nhttps://t.me/kufa2023/702\n\nبرنامج Microsoft Word الجزء الثاني :\n\nhttps://t.me/kufa2023/703\n\nبرنامج Microsoft PowerPoint :\n\nhttps://t.me/kufa2023/704"
  
  Bot.sendMessage(link)
  
}


if(temp === "Translation") {
  
  const link2 = "ملازم مادة علم الكمبيوتر العملية المترجمة 💻🖱 :\n\nمحاضرة برنامج Microsoft Word الجزء الاول :\n\nhttps://t.me/kufa%5Fnursing%5Ftranslation/40\n\nمحاضرة برنامج Microsoft Word الجزء الثاني :\n\nhttps://t.me/kufa%5Fnursing%5Ftranslation/67\n\nمحاضرة برنامج Microsoft PowerPoint :\n\nhttps://t.me/kufa%5Fnursing%5Ftranslation/93";
  
  Bot.sendMessage(link2)
  
}

if(temp === "Test Me") {
  
  Bot.sendMessage("https://t.me/kufa2023/686")
  
}

if(temp === "Youtube") {
  
  const link3 = "محاضرات Microsoft Word الفيديوية :\n\n🤝 شرح استاذ المادة الجزء الاول - نظري فقط\n\nhttps://youtu.be/mId6OP-Z-Ys\n\n🤝 شرح استاذ المادة الجزء الثاني - نظري فقط\n\nhttps://youtu.be/mL32mqBs9pY\n\n🤝 شرح استاذ المادة الجزء الثالث - نظري فقط\n\nhttps://youtu.be/dfJzauQInoQ\n\n🤝 شرح خارجي للبرنامج - تطبيق عملي\n\nhttps://youtube.com/playlist?list=PL1d%5Fpoq9IYFs-VbDN0h0OwbHfcfU-ljNe\n\nمحاضرات Microsoft PowerPoint الفيديوية :\n\n🤝 شرح استاذ المادة - نظري فقط\n\nhttps://youtu.be/EiVbOiyTkLo\n\n🤝 شرح خارجي شامل عملي\n\nhttps://youtu.be/po70jHtTskI";
  
  Bot.sendMessage(link3)
  
}
