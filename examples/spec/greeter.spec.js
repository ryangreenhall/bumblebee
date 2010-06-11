describe('Greeter', function() {

    load('examples/src/greeter.js');

    it('greets people', function() {
      expect(greeter().greet()).to(eql, 'Hello!');
    });
});