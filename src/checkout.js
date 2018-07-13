function Checkout() {
  this.items = []
}

Checkout.prototype.scan = function(item) {
  this.items.push(item)
  return 'Item scanned';
};

Checkout.prototype.total = function() {
  var prices = this.items.map( item => item.price)
  return prices.reduce(function(a,b) {
    return a + b
  });
};

function newArray(items) {
  var prices = items.map( item => item.price)
  return prices.reduce(function(a,b) {
    return a + b
  });
}

function sum(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}
