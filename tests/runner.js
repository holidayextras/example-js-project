describe('Booleans', function() {

  describe('true', function () {

    it('passes', function () {
      var expected = "hello";
      debugger;
      expect(expected).to.eq("hello");
    });

    it('fails', function() {
      var a = "hello";
      debugger;
      expect(true).to.be.false();
    });

  });

});
