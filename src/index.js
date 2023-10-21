import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';
import {REPLACEMENT_REGEX} from "./constants/replacement-regex.js";
import {ORIGIN_REPLACEMENTS_MAP} from "./constants/origin-replacements-map.js";
import {VZHUH} from "./constants/vzhuh.js";

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(REPLACEMENT_REGEX, function (msg, match) {
    const chatId = msg.chat.id;
    console.log(match);
    const origin = ORIGIN_REPLACEMENTS_MAP.get(match[1]);
    if (!origin) {
        return;
    }
    const path = match[2];

    bot.sendMessage(chatId, `${origin}${path}\n\n${VZHUH}`, {
        reply_to_message_id: msg.message_id
    });
});