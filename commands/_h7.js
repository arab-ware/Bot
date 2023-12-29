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

    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/forwardMessage",
      body: {
        from_chat_id: from_chat_id,
        chat_id: chat_id,
        message_id: message_id
      } ,
      background:true
    })
  } else {
    Bot.sendMessage(
      "حدث خطأ يرجى مراسلة المطور فضلا لا امرا \n @programmer_ameer"
    )
  }
}

if (user.telegramid === 1318999805) {
  const stringArray = [
    "5604771892",
    "5106147291",
    "890526090",
    "197588423",
    "5959793043",
    "768174663",
    "1143177827",
    "5644525292",
    "5328733513",
    "5675085155",
    "735637850",
    "5255502140",
    "1288371074",
    "5915019408",
    "1559251375",
    "5482483861",
    "1098624383",
    "5889045958",
    "5647691429",
    "901945998",
    "5646636239",
    "5846630305",
    "964562623",
    "1476983475",
    "910020131",
    "5629541740",
    "6353586776",
    "1064766237",
    "5859835500",
    "1015600336",
    "6218389142",
    "5901123096",
    "898582094",
    "5804896219",
    "1398391188",
    "492594094",
    "1828097987",
    "1485429947",
    "932571270",
    "2117317230",
    "1886213122",
    "1200987266",
    "5628659908",
    "5904254134",
    "1034384134",
    "5955591509",
    "1080762470",
    "5690644058",
    "5656069464",
    "702244084"
  ]

  const numberArray = stringArray.map(str => parseInt(str))

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/abcdefehduauqu/3286", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
}

