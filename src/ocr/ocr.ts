import Tesseract from "tesseract.js";

export async function readMileage(img: string): Promise<number | null> {
  const result = await Tesseract.recognize(img, "eng", {
    tessedit_char_whitelist: "0123456789"
  });
  const nums = result.data.text.match(/\d{4,7}/g);
  return nums ? Math.max(...nums.map(Number)) : null;
}
