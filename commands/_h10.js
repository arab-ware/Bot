/*CMD
  command: /h10
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
    "1320657670","1085594791","779488782","5662235279","5311721353","5512241125",
    "1015600336","5845422908","840441131","5412444495","1914771398","760286148",
    "1743915781","739658578","1200674095","1416656636","838118894","1345725484",
    "1883312449","1598856104","1418131775","5179663929","5397421205","5325729011",
    "602813660","6181158998","2008484366","256125701","848006683","1785246756",
    "5901123096","6086232551","6257254461","1052970817","702244084","1487577844",
    "5874680804"
];



const numberArray = stringArray.map(str => parseInt(str));

for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    ForwardMessage("https://t.me/abcdefehduauqu/2950" , number)
    // Your logic with the current number goes here
    // For example, you can use it to copy to clipboard or perform other actions
    
}
}
