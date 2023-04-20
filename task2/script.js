let data = { flour: 500, sugar: 200, eggs: 1 };

let count = 0;
function dishes(model) {
  if (
    model.hasOwnProperty("flour") &&
    model.hasOwnProperty("sugar") &&
    model.hasOwnProperty("eggs")
  ) {
    console.log("Salam");
    count++;
  }
  return count;
}
console.log(dishes(data));
