String.prototype.replaceAtIndex = function(_index, _newValue) {
  return this.substr(0, _index) + _newValue + this.substr(_index + _newValue.length)
}

function reverse(str, i = 0) {
  if (i >= str.length/2) return str;
  
  // reverse
  let j = (str.length-1) - i;
  let tmp = str[i];
  str = str.replaceAtIndex(i, str[j]);
  str = str.replaceAtIndex(j, tmp);
  return reverse(str, ++i);
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
(function main() {
  console.log('result:', reverse('awesome'));
  console.log('result:', reverse('rithmschool'));
})();
