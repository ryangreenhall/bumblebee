describe("how to use jquery in a headless fashion", function(){

    it("can find content from the dom using selectors", function(){
        var dom = jQuery('<html>'+
                            '<body>' +
                                '<ul class="guitars">' +
                                    '<li class="make">Fender</li>' +
                                '</ul>' +
                            '<body>' +
                        '</hmtl>');

        expect(dom.find('.make').text()).to(eql, "Fender");
    });
});