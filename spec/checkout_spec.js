describe("UNIT TESTS: Checkout", function() {

  var checkout;
  var item1;
  var item2;

  beforeEach(function() {
    checkout = new Checkout();
    item1 = {name: "item1", price: 1};
    item2 = {name: "item2", price: 2};
  });

  describe(".scan", function() {
    it('confirms that an item has been scanned', function() {
      expect(checkout.scan(item1)).toEqual('Item scanned');
    });
    it('adds an item to the checkout', function() {
      checkout.scan(item1);
      expect(checkout.items).toContain(item1);
    });
  });

  describe(".total", function() {
    it('returns the checkout total in the correct format', function() {
      checkout.scan(item1);
      checkout.scan(item2);
      expect(checkout.total()).toEqual('£3.00');
    });
  });

});
