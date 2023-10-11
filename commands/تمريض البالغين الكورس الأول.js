/*CMD
  command: تمريض البالغين الكورس الأول
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

const L1 = "Digestive System - Adult Nursing"
const L2 = "Blood Disorders - Adult Nursing"
const L3 = "Respiratory System - Adult Nursing"
const L4 = "Cancer Management - Adult Nursing"
const L5 = "Nursing Process - Adult Nursing"
const L6 = "Ulcerative colitis And Crohn’s Disease - Adult Nursing"
const L7 = "Liver Disease - Adult Nursing"
const L8 = "Ischemic Heart Disease - Adult Nursing"
const L9 = "Gastritis - Adult Nursing"
const msg = "قم باختيار المحاضرة لو سمحت"
const exit = "إغلاق و رجوع"
const exit_only = "إغلاق فقط"
const line = "\n"

if(temporary === "Original") {
  

ForwardMessage("https://t.me/abcdefehduauqu/2701", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2703", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2705", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2707", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2709", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2711", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2713", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2715", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2717", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3005" , user.telegramid)
  
}

if(temporary === "Translation") {
  
ForwardMessage("https://t.me/abcdefehduauqu/2702", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2704", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2706", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2708", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2710", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2712", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2714", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2716", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/2737", user.telegramid)
ForwardMessage("https://t.me/abcdefehduauqu/3006" , user.telegramid)

  
  
}

if(temporary === "lectureYA") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2953" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2954" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/3013" , user.telegramid)

    
ForwardMessage("https://t.me/abcdefehduauqu/3009" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3010" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/3056" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3053" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3054" , user.telegramid)
    
    ForwardMessage("https://t.me/abcdefehduauqu/3055" , user.telegramid)
    
  }
  
  if(temporary === "Old") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/3004" , user.telegramid)
    
  }
  
  if(temporary === "current") {
    
    ForwardMessage("https://t.me/abcdefehduauqu/2710" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/3006" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2708" , user.telegramid)
    ForwardMessage("https://t.me/abcdefehduauqu/2702", user.telegramid)
    
    
  }

