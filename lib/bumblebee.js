importClass(java.io.File);
importClass(Packages.org.apache.tools.ant.util.FileUtils);
importClass(java.io.FileReader);

function loadFile(fileName) {
	var file = new File(fileName);
	if (file.isAbsolute() === false) {
	    file = new File(this.project.getProperty("basedir"), fileName);
	}
	var reader = new FileReader(file);
	return (new String(FileUtils.readFully(reader))).toString();
}

function load(filename) {
    eval(loadFile(filename));    
}

load('dependencies/js/jspec/jspec.js');
load('dependencies/js/underscore.js');

self.log("Bumblebee would like to execute your specs");

var names = ["Ryan", "James", "Bob"];

_.each(names, function(name) {
    self.log(name);
});


