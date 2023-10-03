/*CMD
  command: /h8
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
    "901945998","451068799","1038185545","197588423","1179120058","1442045684",
    "1175062256","1828097987","5820857122","929655948","5686168552","5821714566",
    "1398391188","5804896219","5828096092","1685643787","6452226718","341925026",
    "5955591509","1806231049","6404100514","1858924952","1064766237","1411268668",
    "5255502140","5553520996","898582094","5628659908","6061609819","1132583031"
];



const numberArray = stringArray.map(str => parseInt(str));

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
ForwardMessage("https://t.me/abcdefehduauqu/2950" , number)
    // Your logic with the current number goes here
    // For example, you can use it to copy to clipboard or perform other actions
    
}
}
