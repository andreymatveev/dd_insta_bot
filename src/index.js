import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';
import {ORIGIN_REPLACEMENT_REGEX} from "./constants/origin-replacement-regex.js";
import {ORIGIN_REPLACEMENTS_MAP} from "./constants/origin-replacements-map.js";
import {VZHUH} from "./constants/vzhuh.js";
import {STICKER_REPLACEMENT_REGEX} from "./constants/sticker-replacement-regex.js";
import {STICKER_REPLACEMENTS_MAP} from "./constants/sticker-replacements-map.js";

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.onText(ORIGIN_REPLACEMENT_REGEX, function (msg, match) {
    const chatId = msg.chat.id;
    const origin = ORIGIN_REPLACEMENTS_MAP.get(match[1]);
    if (!origin) {
        return;
    }
    const path = match[2];

    bot.sendMessage(chatId, `${origin}${path}\n\n${VZHUH}`, {
        reply_to_message_id: msg.message_id
    });
});

bot.onText(STICKER_REPLACEMENT_REGEX, function (msg, match) {
    const chatId = msg.chat.id;
    const sticker = STICKER_REPLACEMENTS_MAP.get(match[0]);
    if (!sticker) {
        return;
    }

    bot.sendSticker(chatId, sticker, {
        reply_to_message_id: msg.message_id
    });
})