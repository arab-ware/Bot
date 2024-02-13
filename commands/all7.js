/*CMD
  command: all7
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

Bot.runAll( {
    // this command will be executed
    // for each private chat (user)
    command: "/public7771",
    for_chats: "private-chats"
    // options: { any_data: "here" }
} )
