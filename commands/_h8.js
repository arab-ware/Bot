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
    "1092608729",
    "1414322925",
    "1136897224",
    "2108460181",
    "5847068177",
    "6006796202",
    "1341752850",
    "956758867",
    "1110855484",
    "1179120058",
    "713314820",
    "5832873399",
    "5416469653",
    "1858924952",
    "5607184292",
    "6061609819",
    "838118894",
    "733414426",
    "461441264",
    "931114311",
    "1175062256",
    "5215443141",
    "1862570880",
    "1338920475",
    "848006683",
    "5403168765",
    "1091420927",
    "836860599",
    "602813660",
    "679224823",
    "1330325672",
    "1730471571",
    "5147273073",
    "1551705817",
    "5724875712",
    "977026373",
    "964077695",
    "1885020039",
    "5844127957",
    "6326920136",
    "5825624563",
    "1785246756",
    "6615443963",
    "5275511431",
    "5009745246",
    "1078579156",
    "724378211",
    "5412444495",
    "986478576",
    "1685643787"
  ]

  const numberArray = stringArray.map(str => parseInt(str))

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/kufa_nurse_college/944", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
  ForwardMessage("https://t.me/kufa_nurse_college/944", 1318999805) 
}

