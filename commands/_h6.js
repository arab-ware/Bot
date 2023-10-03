/*CMD
  command: /h6
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
    "5629541740","5106147291","1318999805","1288371074","5027365984","1198801443",
    "1791629769","713314820","5482483861","5023565082","679224823","5847068177",
    "1098624383","357553813","5904254134","2061412121","5009745246","1559251375",
    "5675085155","5941341796","1653658781","1886213122","5944485324","5328733513",
    "1143177827","1330325672","628021955","735637850","5828019179","5478364694"
];



const numberArray = stringArray.map(str => parseInt(str));

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    ForwardMessage("https://t.me/abcdefehduauqu/2950" , number)
    // Your logic with the current number goes here
    // For example, you can use it to copy to clipboard or perform other actions
    
}
ForwardMessage("https://t.me/abcdefehduauqu/2950" , 354937490)
}
