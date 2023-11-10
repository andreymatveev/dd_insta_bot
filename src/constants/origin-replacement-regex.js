import {ORIGIN_REPLACEMENTS_MAP} from "./origin-replacements-map.js";

const originKeysRegex = [...ORIGIN_REPLACEMENTS_MAP.keys()].map((key) => key.replace('.', '\\.')).join('|');

export const ORIGIN_REPLACEMENT_REGEX = new RegExp(`(?<!\\S)(?:https?:\\/\\/)?(?:www\\.)?(${originKeysRegex})\\/(\\S+)`, 'ig');
