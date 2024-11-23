const getTotalPrice = (products) => {
  return products.reduce(function (total, product) { return total + product.price; }, 0);
};
var products = [
  { name: "Tape", price: 10 },
  { name: "Chair", price: 50 },
  { name: "Lite", price: 20 },
  { name: "Fan", price: 30 },
  { name: "Lamp", price: 40 }
];
var totalPrice = getTotalPrice(products);
console.log("Total Price: $".concat(totalPrice));
/*
  Instructions to Run:
  1. Compile this TypeScript file using the command: tsc product.ts
  2. This will generate a JavaScript file (product.js) in the same directory.
  3. Run the resulting JavaScript file using Node.js or include it in an HTML file.
  Example command to run:
  node product.js
*/
