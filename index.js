require('dotenv').config({silent: true})
const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true})

bot.onText(/\/isgithubon9/, msg => {
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'GitHub is on9', callback_data: 'yes' }],
        [{ text: 'GitHub is not on9', callback_data: 'no' }]
      ]
    })
  }
  bot.sendMessage(msg.chat.id, 'Is GitHub on9?', options)
})

bot.on('callback_query', msg => {
  const chatId = msg.message.chat.id
  bot.answerCallbackQuery(msg.id).then(() => {
    if (msg.data === 'yes') {
      bot.sendMessage(chatId, 'Yes GitHub is on9')
    } else if (msg.data === 'no') {
      bot.sendMessage(chatId, 'Sorry GitHub is still on9')
    }
  })
})
