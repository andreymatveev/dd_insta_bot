import {ORIGIN_REPLACEMENTS_MAP} from "./origin-replacements-map.js";
import {STICKER_REPLACEMENTS_MAP} from "./sticker-replacements-map.js";

const stickerKeysRegex = [...STICKER_REPLACEMENTS_MAP.keys()].map((key) => key).join('|');

export const STICKER_REPLACEMENT_REGEX = new RegExp(`${stickerKeysRegex}`, 'ig');
