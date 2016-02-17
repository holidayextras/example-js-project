describe('Booleans', function() {

  describe('true', function () {

    it('passes', function () {
      expect(true).to.be.true();
    });

    it('fails', function() {
      expect(true).to.be.false();
    });

  });

});
