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
  const numberArray = [1858924952 , 1274773588 , 697332982 , 6776163297 , 898582094 , 5764635202 , 6811277001 , 609407493 , 5506288663 , 6979028092 , 1468076851 , 1447967009 , 243505912 , 2061943275 , 134950120 , 874075640 , 6648353518 , 678262906 , 5404542650 , 1123281403 , 1716161697 , 6016779931 , 1615961274 , 1965895553 , 6509830394 , 929655948 , 5548953598 , 1961107245 , 1620911203 , 5179663929 , 1076663886 , 702244084 , 1037034837 , 5676918327 , 6421391504 , 760286148 , 1136547095 , 970202901 , 1447029320 , 2067353468 , 951431059 , 1139195036 , 1294001946 , 2021254376 , 5675085155 , 6006796202 , 1495364469 , 521465254 , 1131483644 , 1235358252 , 5432271703 , 5123084843 , 1284100806 , 1298582725 , 977026373 , 1165047036 , 6615443963 , 1785246756 , 6507677172 , 1198801443 , 5423178522 , 815576982 , 1793475719 , 5133852543 , 6661244404 , 6926978408 , 1131522505 , 496446575 , 6739131665 , 817641389 , 1373146549 , 5414595142 , 6582459826 , 1597793544 , 5613651204 , 1136897224 , 953185533 , 747259085 , 5173487367 , 5425557618 , 6588682350 , 999584435 , 1301254225 , 5628659908 , 1345569163 , 778809417 , 6591299766 , 6400791826 , 1456770167 , 466706872 , 5646636239 , 651072683 , 5616690241 , 730519951 , 6447640325 , 5354581218 , 6624695897 , 5163368271 , 5412444495 , 6123452358]

  

  for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i]
   ForwardMessage("https://t.me/abcdefehduauqu/3292", number) // Your logic with the current number goes here // For example, you can use it to copy to clipboard or perform other actions
  
}
 ForwardMessage("https://t.me/abcdefehduauqu/3292", 1318999805)

}
