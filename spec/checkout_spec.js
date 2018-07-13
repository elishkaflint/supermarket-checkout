describe("checkout", function() {

  describe(".scan", function() {
    it('confirms that an item has been scanned', function() {
      var item = jasmine.createSpy('item');
      var checkout = new Checkout();
      expect(checkout.scan(item)).toEqual('Item scanned');
    });
  });

});
