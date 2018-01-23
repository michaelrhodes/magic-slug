var adler = require('adler32')
var enc = require('numenc/encode')
var dec = require('numenc/decode')
var valid = /^[zothrvxsen]+$/

var secret = process.env.MAGIC_SLUG_SECRET
var offset = adler.sum(secret || 'M4g1C5LuG')

module.exports = encode
module.exports.decode = decode

function encode (num) {
  return enc(offset + Number(num))
}

function decode (str) {
  return valid.test(str) ? dec(str) - offset : null
}
