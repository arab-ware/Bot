/*CMD
  command: الجانب العملي من أساسيات التمريض
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
  const resultLink = link.replace("%5F" , "_")
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

if(temporary === "Short") {
  
  ForwardMessage("https://t.me/kufa2023/828")
  
} else {


const link = "\nعملي اساسيات - تحضير ادوات الحقن :\nhttps://youtu.be/8zZHkcjdZjM\nعملي اساسيات - الحقن ID و SC :\nhttps://youtu.be/uMPmfh0PQPo\nعملي اساسيات - الحقن IM :\nhttps://youtu.be/mNDmxCcUUI0\nعملي اساسيات - الحقن الوريدي IV الكانولة :\nhttps://youtu.be/NoAQndIQML4\nمحاضرة غسل اليدين :\nhttps://youtu.be/B%5FQnaBgp6jM\nمحاضرة ارتداء القفازات :\nhttps://youtube.com/shorts/QAmrImkB8EY?feature=share\nمحاضرة bandage الرأس :\nhttps://youtu.be/L3NlKm-yUsM\nمحاضرة bandage للاشياء الاخرى :\nhttps://youtu.be/aX09VIkF7Tk\nمحاضرة لبس القفازات المعقمة :\nhttps://youtu.be/sRNuNnREsZc\nالعناية بالجروح :\nhttps://youtu.be/0vRFW2bsKpM\nشرح بعض وضعيات المريض :\nhttps://youtu.be/iWDtT6z%5FO9I\nشرح قياس درجة الحرارة :\nhttps://youtu.be/E%5FoIZ0FWeoM\nشرح قياس التنفس :\nhttps://youtu.be/l9ge9FQZX7s\nشرح قياس النبض :\nhttps://youtu.be/TVcFZ7F28d0\nشرح قياس ضغط الدم (حسب المنهج) :\nhttps://youtu.be/BoMqyqG31p8\nو هذه (ليست شرح الدكاترة)\nاولا )الزئبقي\nhttps://youtu.be/F2wJrsAbQh8\nثانيا)الآلي\nhttps://youtu.be/uKAn9ky-9bo\nثالثا)ابو كيج\nhttps://youtu.be/UGOoeqSo%5Fws\n\n\nاذا كان هنالك محاضرات لم نضع رابطها يرجى مشاركتنا\n\n@programmer_ameer"

Bot.sendMessage(link)

}
