var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log ("list 1");
var list = 0

while (list < ingredients.length) {
    console.log(ingredients[list]);
    list++;
  }

// Write a for loop that prints out the contents of ingredients:

console.log ("list 2");

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log ("list 3");
for (var i = ingredients.length-1; i >= 0; i--) {
  console.log(ingredients[i]);
}