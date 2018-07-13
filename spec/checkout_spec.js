describe("checkout", function() {

  describe(".scan", function() {
    it('confirms that an item has been scanned', function() {
      var item = jasmine.createSpy('item');
      var checkout = new Checkout();
      expect(checkout.scan(item)).toEqual('Item scanned');
    });
    it('confirms that an item has been scanned', function() {
      var item = jasmine.createSpy('item');
      var checkout = new Checkout();
      checkout.scan(item);
      expect(checkout.items).toContain(item);
    });
  });

  describe(".total", function() {
    it('returns the checkout total', function() {
      var bread = new Item('bread', 1);
      var milk = new Item('milk', 2);
      var checkout = new Checkout();
      checkout.scan(bread)
      checkout.scan(milk)
      expect(checkout.total()).toEqual(3);
    });
  });

});
