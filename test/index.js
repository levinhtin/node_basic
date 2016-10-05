var camelHelper = require('../src/index.js');
var expect = require('chai').expect;

describe('Verify Email Test Case', function() {
  var object = {
    _FieldNameTest1: 'test1',
    FieldNameTest_2: 'test2',
    __FieldNameTest3: 'test3',
    _FieldNameTest_4: 'test4',
    FieldNameTest5: 'test5',
    Field_NameTest6: 'test6',
    _Field_NameTest_7_: 'test7',
    _Field_NameTest_8__: 'test8',
    _field_NameTest_9: 'test9',
    _FFieldNamTest_10: 'test10',
    _Field_Name_Test_11: 'test11',
    fieldNameTest12: 'test12'
  };
  
  console.log(camelHelper.convert(object));

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest1).to.be.equal('test1');
  });

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest2).to.be.equal('test2');
  });

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest3).to.be.equal('test3');
  });

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest4).to.be.equal('test4');
  });

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest5).to.be.equal('test5');
  });

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest6).to.be.equal('test6');
  });  

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest7).to.be.equal('test7');
  });  

  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest8).to.be.equal('test8');
  });  
  
  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest9).to.be.equal('test9');
  });  

  it('Should be true', function() {
    expect(camelHelper.convert(object).fFieldNameTest10).to.be.equal('test10');
  });  
  
  it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest11).to.be.equal('test11');
  });  
  
    it('Should be true', function() {
    expect(camelHelper.convert(object).fieldNameTest12).to.be.equal('test12');
  });  

})