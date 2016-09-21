var emailHelper = require('../src/index.js');
var expect = require('chai').expect;

describe('Verify Email Test Case', function() {
  it('Should be false when input null', function() {
    expect(emailHelper.verify(null)).to.be.false;
  })

  it('Should be false when input empty', function() {
    expect(emailHelper.verify('')).to.be.false;
  })

  it('Should be false when input abc', function() {
    expect(emailHelper.verify('abc')).to.be.false;
  })

  it('Should be false when input abc.com@gmail', function() {
    expect(emailHelper.verify('abc.com@gmail')).to.be.false;
  })

  it('Should be true when input abc@_.com', function() {
    expect(emailHelper.verify('abc@_.com')).to.be.true;
  })

  it('Should be false when input _@gmail', function() {
    expect(emailHelper.verify('_@gmail')).to.be.false;
  })
  
  it('Should be true when input _@gmail.com', function() {
    expect(emailHelper.verify('_@gmail.com')).to.be.true;
  })

  it('Should be true when input soaica@gmail.com', function() {
    expect(emailHelper.verify('soaica@gmail.com')).to.be.true;
  })
})