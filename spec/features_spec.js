describe("supermarket checkout", function() {

  var item1;
  var item2;
  var checkout;

  beforeEach(function() {
    checkout = new Checkout();
    item1 = new Item('item1', 1);
    item2 = new Item('item2', 2);
  });

  // As a shopper
  // So I know how much an item costs
  // I would like to be able to see its price

  describe("item cost", function() {
    it('the user can see the the price of an item', function() {
      expect(item1.getPrice()).toEqual('£1.00');
    });
  });

  // As a shopper
  // So that I can buy an item
  // I would like to be able to scan items at the checkout

  describe("scanning an item", function() {
    it('the user can scan an item at the checkout', function() {
      expect(checkout.scan(item1)).toEqual('Item scanned');
    });
    it('the checkout tracks the scanned items', function() {
      checkout.scan(item1);
      expect(checkout.items).toContain(item1);
    });
  });

  // As a shopper
  // So that I know how much to pay
  // I would like to be able to see a total for all scanned items

  // As a shopper
  // So that I know how much to pay
  // I would like to see all prices correctly formatted (£xx.xx)

  describe("calculating the total", function() {
    it('the user can see the total of scanned items in the correct format', function() {
      checkout.scan(item1);
      checkout.scan(item2);
      expect(checkout.total()).toEqual('£3.00');
    });
  });

});
