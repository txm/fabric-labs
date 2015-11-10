var assert = require('assert')
var http = require('http')

describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')))
  })
})

describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')))
  }) 

  it('should return the same array', function(){
    assert.equal(['a','b','c'].length, 'a,b,c'.split(',').length, 'arrays have equal length')
    for (var i=0; i<['a','b','c'].length; i++) {
      assert.equal(['a','b','c'][i], 'a,b,c'.split(',')[i], i +'element is equal')
    }
  })
})



/*

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1)
      [1,2,3].indexOf(0).should.equal(-1)
    })
  })
})

*/

/*

describe('homepage', function(){
  it('should respond to GET',function(){
    superagent
      .get('http://localhost:'+server.port)
      .end(function(res){
        expect(res.status).to.equal(200)
    })
  })
})

*/



/*

var superagent = require('superagent')
var expect = require('expect')
describe('homepage', function(){
  it('should respond to GET',function(done){
    superagent
      .get('http://localhost:'+server.port)
      .end(function(res){
        expect(res.status).to.equal(200)
        done()
    })
  })
})

*/


describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
    console.log('before every test in every file')

  })

  after(function() {
    // runs after all tests in this block
  })

  beforeEach(function() {
    // runs before each test in this block
  })

  afterEach(function() {
    // runs after each test in this block
  })

  // test cases
})




var server = require('./server')

describe('server', function () {

  before(function () {
    server.listen(server.port)
  })

  after(function () {
    server.close()
  })

  describe('/', function () {

    it('should return 200', function (done) {
      http.get('http://localhost:'+server.port, function (res) {
        assert.equal(200, res.statusCode)
        done()
      })
    })

    it('should say "Hello, world!"', function (done) {
      http.get('http://localhost:'+server.port, function (res) {
        var data = ''
  
        res.on('data', function (chunk) {
          data += chunk
        })

        res.on('end', function () {
          assert.equal('Hello, world!\n', data)
          done()
        })

      })
    })

  })

})
