describe("supermarket checkout", function() {

  // As a shopper
  // So I know how much an item costs
  // I would like to be able to see its price

  describe("item cost", function() {
    it('the user can see the the price of an item', function() {
      var item = new Item('bread', 1);
      expect(item.getPrice()).toEqual(1);
    });
  });

  // As a shopper
  // So that I can buy an item
  // I would like to be able to scan items at the checkout

  describe("scanning an item", function() {
    it('the user can scan an item at the checkout', function() {
      var item = new Item('bread', 1);
      var checkout = new Checkout();
      expect(checkout.scan(item)).toEqual('Item scanned');
    });
  });

});



//
// As a shopper
// So that I know how much to pay
// I would like to be able to see a total for all scanned items
//
// As a shopper
// So that I know how much to pay
// I would like to see all prices correctly formatted (£xx.xx)