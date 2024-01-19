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
  const numberArray = [2146122194 , 1015600336 , 5952826950 , 6513266223 , 5369696258 , 1289303725 , 1109112346 , 6244706223 , 1423267891 , 6733167517 , 572119856 , 640264584 , 5432233919 , 1423466567 , 5446129012 , 1730471571 , 6814994152 , 1149500997 , 5027468274 , 6634757542 , 1734135751 , 1452109708 , 5728748761 , 5023565082 , 6452226718 , 2069866437 , 955549894 , 1086913139 , 6867329941 , 932571270 , 5686168552 , 1598856104 , 1003546676 , 6330265212 , 6500038412 , 5892952490 , 727853275 , 5993226256 , 5950670574 , 5832873399 , 5930627838 , 5543736647 , 6371207434 , 6184817538 , 314390870 , 1648790425 , 1134909292 , 1055579533 , 5730862129 , 1492121366 , 918153539 , 6583303628 , 5304386208 , 1685643787 , 6673091157 , 1291268129 , 109941186 , 1411268668 , 6358320503 , 1289474691 , 6500587460 , 1833972924 , 1740191536 , 5821714566 , 735637850 , 625793002 , 6715681364 , 1856742144 , 1336008862 , 1492969469 , 1108954357 , 1753378096 , 5656069464 , 5625727029 , 6550357315 , 1480399563 , 5660704442 , 1484109082 , 1330325672 , 5859835500 , 1415772683 , 6491392931 , 5255502140 , 906410884 , 6362703717 , 1080459661 , 6722562195 , 1426504690 , 5205842661 , 2146290743 , 718505018 , 5553520996 , 1739146949 , 1459349061 , 1055330378 , 6368128797 , 6781482250 , 1403270029 , 602813660 , 924481676]

  

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    
    ForwardMessage("https://t.me/abcdefehduauqu/3292", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
  ForwardMessage("https://t.me/abcdefehduauqu/3292", 1318999805) 
}

