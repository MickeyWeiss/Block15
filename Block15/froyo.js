const userInputString = prompt(
    "Please enter some Frozen Yogurt flavors separated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  const stringArray = userInputString.split(",");
  console.log(stringArray);

let order = {}
for (let i = 0; i < stringArray.length; i++ ){
  let order = stringArray[i]
  console.table(order)
}