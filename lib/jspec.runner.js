load('dependencies/js/env.rhino.1.2.js');
window.location="examples/fixture/fixture.html";

load('dependencies/js/jspec/jspec.js');
load('dependencies/js/jquery.js');

var runSpec = function(spec) {
    JSpec.exec(spec);
};

// TODO a better solution would be to provide a src dir and find all specs and run. This may require using Ant's scriptlet feature ala RhinoUnit
var specs = ['greeter'];

jQuery.each(specs, function(index, spec) {
    runSpec("examples/spec/" + spec + ".spec.js");
});

JSpec
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report();