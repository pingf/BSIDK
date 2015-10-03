// module.exports = function (broccoli) {
    // var filterCoffeeScript = require('broccoli-coffee');
    // var compileES6 = require('broccoli-es6-concatenator');
    //
    // var sourceTree = broccoli.makeTree('lib');
    // sourceTree = filterCoffeeScript(sourceTree);
    //
    // var appJs = compileES6(sourceTree, {
    // ...
    // outputFile: '/assets/app.js'
    // });
    //
    // var publicFiles = broccoli.makeTree('public');
    //
    // return [appJs, publicFiles];
// };
var browserify = require('broccoli-browserify');
var copy = require('broccoli-static-compiler');
var merge = require('broccoli-merge-trees');
var babel = require('broccoli-babel-transpiler');


var html = copy('.', {
  files: ['index.html'],
  srcDir: '.',
  destDir: '.'
});

var js = babel('components', {});

js = browserify(js, {
  entries: ['./App.js'],
  outputFile: './assets/js/bundle.js'
});

module.exports = merge([js,html]);
