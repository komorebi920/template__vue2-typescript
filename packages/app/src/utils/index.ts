import "fast-text-encoding";

export { default as nanoid } from "./nanoid";
export { default as storage } from "./storage";

/**
 * 睡眠
 */
export const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

/**
 * 将 Blob 转换成 ArrayBuffer
 */
export const blob2arraybuffer = (blob: Blob): Promise<ArrayBuffer> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        resolve(event.target.result as ArrayBuffer);
      }
    };
    reader.readAsArrayBuffer(blob);
  });

/**
 * 将 ArrayBuffer 转换成 String
 */
export const arraybuffer2String = (arraybuffer: ArrayBuffer): string => {
  const parts = new Uint8Array(arraybuffer);
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(parts);
};

/**
 * 将 ArrayBuffer 转换成 Url
 */
export const arraybuffer2Url = (arraybuffer: ArrayBuffer): string => {
  const blob = new Blob([arraybuffer], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  return url;
};
