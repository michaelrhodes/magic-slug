var assert = require('assert')
var slug = require('./index')

assert.equal(slug(1), 'rhnzntr')
assert.equal(slug.decode('rhnzntr'), 1)
