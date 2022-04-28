export function dealText(text, length) {
  text = text.substring(0, length);
  text += "...";
  return text;
}
export function dateformat(date) {
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minuts =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minuts + ":" + seconds
  );
}
