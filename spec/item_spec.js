describe("UNIT TESTS: Item", function() {

  describe(".getPrice", function() {
    it('returns the price of an item in the correct format', function() {
      var item = new Item('bread', 1);
      expect(item.getPrice()).toEqual('£1.00');
    });
  });

});
