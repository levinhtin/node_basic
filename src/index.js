const camel = require('./camelCase');

var convertKeysToCamelCase = (obj) => {

  Object.keys(obj).forEach((key) => {
    var k = camel(key);

    if (k !== key) {
      obj[k] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};

module.exports = {
  convert: convertKeysToCamelCase
};
