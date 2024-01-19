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
  const numberArray = [1318999805 , 6062289192 , 942530659 , 985975076 , 640890668 , 6632784595 , 1115554938 , 937725245 , 1339586019 , 6763527573 , 5804896219 , 1217165419 , 1101019153 , 686190740]

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
    ForwardMessage("https://t.me/abcdefehduauqu/3292", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  }
}

