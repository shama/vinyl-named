var test = require('tape')
var fs = require('vinyl-fs')
var through = require('through')
var named = require('../index')

test('add chunkNames to files', function(t) {
  t.plan(1)
  fs.src('test/fixtures/one.js')
    .pipe(named())
    .pipe(through(function(file) {
      t.equal(file.chunkName, 'one', 'chunkName should equal one')
    }, t.end))
})

test('add chunkNames with factory', function(t) {
  t.plan(1)
  fs.src('test/fixtures/one.js')
    .pipe(named(function(file) {
      return 'pineapple'
    }))
    .pipe(through(function(file) {
      t.equal(file.chunkName, 'pineapple', 'chunkName should equal pineapple')
    }, t.end))
})

test('add custom name key to files', function(t) {
  t.plan(1)
  fs.src('test/fixtures/one.js')
    .pipe(named(function(file) {
      file.customName = 'pineapple'
      this.queue(file)
    }))
    .pipe(through(function(file) {
      t.equal(file.customName, 'pineapple', 'customName should equal pineapple')
    }, t.end))
})
