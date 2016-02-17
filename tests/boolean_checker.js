BooleanChecker = require('../src/javascript/boolean_checker')

describe('Booleans', function() {

  describe('isTrue', function () {

    context('when passed false', function() {
      it('returns false', function () {
        expect(BooleanChecker.isTrue(false)).to.be.false();
      });
    });

    context('when passed true', function() {
      it('returns true', function () {
        expect(BooleanChecker.isTrue(true)).to.be.true();
      });
    });

  });

  describe('isFalse', function () {

    context('when passed false', function() {
      it('returns true', function () {
        expect(BooleanChecker.isFalse(false)).to.be.true();
      });
    });

    context('when passed true', function() {
      it('returns false', function () {
        expect(BooleanChecker.isFalse(true)).to.be.false();
      });
    });

  });

});
