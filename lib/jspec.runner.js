load('dependencies/js/env.rhino.1.2.js');
window.location="examples/fixture/fixture.html";

load('dependencies/js/jspec/jspec.js');
load('dependencies/js/jquery.js');

var runSpec = function(spec) {
    JSpec.exec(spec);
};

var specs = arguments;

jQuery.each(specs, function(index, spec) {
    runSpec(spec);
});

JSpec
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report();