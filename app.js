var riot = require('riot')
var d3 = require('d3')
var test = require('./tags/test.tag')
var hello = require('./tags/hello.tag')
var sel = require('./tags/sel.tag')
var todo = require('./tags/todo.tag')
var hello2 = require('./tags/hello2.tag')
riot.mount(test)
riot.mount(hello, {name: 'Jesse'})
riot.mount(sel)
riot.mount(todo)
riot.mount(hello2)
