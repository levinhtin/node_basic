var preserveCamelCase = (str) => {
  var isLastCharLower = false;

  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);

    if (isLastCharLower && (/[a-zA-Z]/).test(c) && c.toUpperCase() === c) {
      str = str.substr(0, i) + '-' + str.substr(i);
      isLastCharLower = false;
      i++;
    } else {
      isLastCharLower = c.toLowerCase() === c;
    }
  }

  return str;
};

module.exports = function convert() {
  var str = [].map.call(arguments, (_str) => {
    return _str.trim();
  }).filter((_str) => {
    return _str.length;
  }).join('-');

  if (!str.length) {
    return '';
  }

  if (str.length === 1) {
    return str.toLowerCase();
  }

  if (!(/[_.\- ]+/).test(str)) {
    if (str === str.toUpperCase()) {
      return str.toLowerCase();
    }

    if (str[0] !== str[0].toLowerCase()) {
      return str[0].toLowerCase() + str.slice(1);
    }

    return str;
  }

  str = preserveCamelCase(str);

  return str
  .replace(/^[_.\- ]+/, '')
  .toLowerCase()
  .replace(/[_.\- ]+(\w|$)/g, (m, p1) => {
    return p1.toUpperCase();
  });
};
