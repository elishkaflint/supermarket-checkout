function Checkout() {
  this.items = []
}

Checkout.prototype.scan = function(item) {
  this.items.push(item)
  return 'Item scanned';
};
