/*CMD
  command: /h9
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


if(user.telegramid === 1318999805) {
  
const stringArray = [
    "768174663","496446575","5846630305","1862570880","955549894","5962033022",
    "757397370","5959793043","5743269093","5607184292","1551705817","5275511431",
    "5859835500","5994740028","5742074156","6006796202","105225689","967497978",
    "1751234849","5694218808","1272546533","568608260","836860599","1376798062",
    "6221280180","5643552902","891670081","1228618933","788134200","1492133777"
];



const numberArray = stringArray.map(str => parseInt(str));

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    ForwardMessage("https://t.me/abcdefehduauqu/2950" , number)
    // Your logic with the current number goes here
    // For example, you can use it to copy to clipboard or perform other actions
    
}
}
