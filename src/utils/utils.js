export function dealText(text, length) {
  text = text.substring(0, length);
  text += "...";
  return text;
}
