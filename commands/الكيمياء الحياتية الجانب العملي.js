/*CMD
  command: الكيمياء الحياتية الجانب العملي
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

const L1 = "X"
const L2 = "X"
const L3 = "X"
const L4 = "X"
const L5 = "X"
const L6 = "X"
const L7 = "X"
const L8 = "X"
const L9 = "X"
const msg = "قم باختيار المحاضرة لو سمحت"
const line = "\n"

if(temporary === "Original") {
  
  ForwardMessage("https://t.me/kufa2023/798")
  
}

if(temporary === "Translation") {
  
  ForwardMessage("https://t.me/kufa2023/799")
  
}

if(temporary === "Test Me") {
  
  Bot.sendMessage("https://t.me/biochemistry%5Fnursing/1207")
  
}

if(temporary === "Old") {
  
  ForwardMessage("https://t.me/kufa2023/801")
  ForwardMessage("https://t.me/kufa2023/833")
  
}

if(temporary === "Short") {
  
ForwardMessage("https://t.me/kufa2023/823")
ForwardMessage("https://t.me/kufa2023/824")
ForwardMessage("https://t.me/kufa2023/825")
ForwardMessage("https://t.me/kufa2023/826")
ForwardMessage("https://t.me/kufa2023/827")
  
}

if(temporary === "Youtube") {
  
  Bot.sendMessage("https://youtu.be/eNjbv2si9So"+line+"https://youtu.be/f0GRcgRtsNo"+line+"https://youtu.be/NkSxv5yO7kI")
  
}
