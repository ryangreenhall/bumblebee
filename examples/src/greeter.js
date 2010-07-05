load("examples/src/namespace.js");

example.greeter = function(){
    var that = {};
    that.greet = function() {
        return "Hello!";
    };

    return that;
};