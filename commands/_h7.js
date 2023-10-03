/*CMD
  command: /h7
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
    "5644525292","5428920972","1087874469","774857448","1200987266","932571270",
    "724378211","1131522505","1403270029","1461144193","1298582725","5593678821",
    "1110855484","784668401","6234411648","890526090","1078579156","1520522484",
    "5915019408","5416469653","5647691429","1092608729","910020131","1034384134",
    "1150662978","810863174","1485429947","5846525404","5892952490","5604771892"
];



const numberArray = stringArray.map(str => parseInt(str));

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    ForwardMessage("https://t.me/abcdefehduauqu/2950" , number)
    // Your logic with the current number goes here
    // For example, you can use it to copy to clipboard or perform other actions
    
}
}
