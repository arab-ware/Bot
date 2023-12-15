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
    "6668784910",
    "1403270029",
    "853517252",
    "1107818959",
    "812064877",
    "6016779931",
    "5636694991",
    "1394834540",
    "1105494003",
    "1419008089",
    "1411445987",
    "5739267120",
    "1652118404",
    "886893013",
    "842994747",
    "5004778259",
    "6181158998",
    "6164581667",
    "747259085",
    "739658578",
    "1029201549",
    "5613860094",
    "5894300605",
    "5451572769",
    "5325729011",
    "628021955",
    "1598856104",
    "5076078732",
    "5072302548",
    "357553813",
    "848558719",
    "2008484366",
    "5993226256",
    "1459349061"
  ]

  const numberArray = stringArray.map(str => parseInt(str))

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/kufa_nurse_college/944", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
}

