/**
 * url 字母表
 */
const urlAlphabet =
  "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

/**
 * 生成 nanoid
 * from: https://github.com/ai/nanoid/blob/main/non-secure/index.js
 */
const nanoid = (size = 21): string => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id;
};

export default nanoid;
