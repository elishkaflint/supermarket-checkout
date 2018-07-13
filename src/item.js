function Item(name, price) {
  this.name = name;
  this.price = price;
}

Item.prototype.getPrice = function () {
  return "£" + this.price.toFixed(2);
};
