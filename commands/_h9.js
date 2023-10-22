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
    "5662235279",
    "5730862129",
    "955549894",
    "5478364694",
    "5962033022",
    "5686168552",
    "1487577844",
    "5828096092",
    "1200674095",
    "5006006567",
    "815576982",
    "5944485324",
    "5874680804",
    "1428813645",
    "5967408339",
    "6363743164",
    "1014549621",
    "731707569",
    "1692009235",
    "2115186808",
    "650068579",
    "496446575",
    "5737806023",
    "6012329498",
    "2063485320",
    "641921021",
    "2113281280",
    "5446129012",
    "760286148",
    "5798629572",
    "5176477440",
    "800220759",
    "2002585668",
    "1218803855",
    "6366165716",
    "525778446",
    "623067254",
    "1301254225",
    "970202901",
    "5821714566",
    "5811824423",
    "2125186211",
    "5691528238",
    "6682955985",
    "1037388777",
    "6650336798",
    "1237642574",
    "1447029320",
    "1137495011",
    "1085594791"
  ]

  const numberArray = stringArray.map(str => parseInt(str))

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/abcdefehduauqu/3076", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
}

