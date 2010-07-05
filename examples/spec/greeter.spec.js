describe('Greeter', function() {

    load('examples/src/greeter.js');

    it('greets people', function() {
      expect(example.greeter().greet()).to(eql, 'Hello!');
    });
});