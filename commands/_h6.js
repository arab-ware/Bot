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
  group: 
CMD*/

function ForwardMessage(link, chat_id) {
  const matches = link.match(/\/(\w+)\/(\d+)/)
  if (matches && matches.length === 3) {
    const from_chat_id = `@${matches[1]}`
    const message_id = parseInt(matches[2])

    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/forwardMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      }
    })
  } else {
    Bot.sendMessage(
      "حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer"
    )
  }
}

if (user.telegramid === 1318999805) {
  const stringArray = [
    "354937490",
    "341925026",
    "784668401",
    "1411268668",
    "2061412121",
    "5892952490",
    "5553520996",
    "1198801443",
    "1653658781",
    "5593678821",
    "1038185545",
    "5027365984",
    "6404100514",
    "788134200",
    "6452226718",
    "6234411648",
    "1806231049",
    "65889681",
    "1131522505",
    "5524625807",
    "1068806434",
    "1298582725",
    "1791629769",
    "5694218808",
    "5815043249",
    "774857448",
    "297193449",
    "5428920972",
    "5944689255",
    "1442045684",
    "1118580442",
    "5941341796",
    "5133852543",
    "5023565082",
    "1284100806",
    "6143006510",
    "1132583031",
    "5320261096",
    "1520522484",
    "5743269093",
    "6117451265",
    "1150662978",
    "1052970817",
    "1260054235",
    "6500038412",
    "2063995522",
    "5764635202",
    "967497978",
    "1948795557",
    "929655948"
  ]

  const numberArray = stringArray.map(str => parseInt(str))

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/abcdefehduauqu/3203", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
 ForwardMessage("https://t.me/abcdefehduauqu/3203", 1318999805) 
}
