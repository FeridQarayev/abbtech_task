function textConvert(text) {
  let newText = "";
  for (let index = 0; index < text.length; index++) {
    let element = text[index];
    let repreatText = "";
    if (index == 0) {
      for (let i = 0; i < index; i++) {
        repreatText = repreatText + element;
      }
      newText = newText + element.toUpperCase() + repreatText;
    } else {
      for (let i = 0; i < index; i++) {
        repreatText = repreatText + element;
      }
      newText = newText + "-" + element.toUpperCase() + repreatText;
    }
  }
  return newText;
}

console.log(textConvert("ab"));
console.log(textConvert("abc"));
