load('dependencies/js/env.rhino.1.2.js');
load('dependencies/js/jspec/jspec.js');

JSpec
  .exec('examples/spec/greeter.spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
  .report();