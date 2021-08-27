
// Business Logic
function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings,
    this.price = 0
}
Pizza.prototype.calculateSize = function(size) {
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 15;
  }
}
Pizza.prototype.calculateToppings = function(toppings) {
  for (let i = 0; i < this.toppings.length; i++) {
    this.price += 2;
  }
};
