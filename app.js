var riot = require('riot')
var test = require('./tags/test.tag')
var hello = require('./tags/hello.tag')
riot.mount(test)
riot.mount(hello)
