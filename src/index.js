require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/(https:\/\/)?instagram.com\/(\S+)/, function (msg, match) {
    const chatId = msg.chat.id;
    const path = match[2];

    bot.sendMessage(chatId, `https://ddinstagram.com/${path}`, {reply_to_message_id: msg.message_id});
});