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
  group: 
CMD*/

function ForwardMessage(link, chat_id) {
  const matches = link.match(/\/(\w+)\/(\d+)/)
  if (matches && matches.length === 3) {
    const from_chat_id = `@${matches[1]}`
    const message_id = parseInt(matches[2])
try {
    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/forwardMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      } ,
      background:true
    })
  } catch(e) {
}
  } else {
    Bot.sendMessage(
      "حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer"
    )
  }
}

if (user.telegramid === 1318999805) {
  const numberArray = [6581658153 , 5941341796 , 5607184292 , 1110855484 , 1559251375 , 641921021 , 5959793043 , 6751922015 , 718682002 , 6478434841 , 1334487929 , 6674782360 , 1442045684 , 5644525292 , 5930551596 , 1622756065 , 6822426535 , 2094768806 , 5743269093 , 1316406339 , 6782380195 , 1306988473 , 1461144193 , 6688468276 , 1487577844 , 1417208567 , 979498831 , 6342404681 , 6218389142 , 5571144271 , 5027365984 , 525485227 , 1449786057 , 836860599 , 1436346056 , 958204441 , 628021955 , 5896486801 , 6828502583 , 1329981133 , 781696083 , 5690644058 , 5051226909 , 5805015983 , 1033213897 , 1391089172 , 6085564298 , 6656420478 , 1362088854 , 5603223715 , 6094436168 , 6897793135 , 6304929178 , 5847068177 , 995089111 , 838118894 , 1179185087 , 1052970817 , 1338920475 , 5798629572 , 5838098899 , 890526090 , 864767502 , 1693392011 , 784668401 , 853517252 , 197588423 , 1828097987 , 861250391 , 683144038 , 1414322925 , 894831580 , 2018601028 , 277527260 , 1200674095 , 6506385578 , 679224823 , 1064766237 , 5325729011 , 1098624383 , 1288371074 , 5901123096 , 1652118404 , 1348999832 , 6544122431 , 5147273073 , 1085594791 , 5944485324 , 596006422 , 1791629769 , 1159141490 , 1199136156 , 6541732635 , 6336445692 , 1253286132 , 858479449 , 773263299 , 6507085356 , 5611433783 , 1484972102]

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    
    ForwardMessage("https://t.me/abcdefehduauqu/3292", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
 
  }
}

