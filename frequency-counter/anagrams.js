function IsAnagrams(str1, str2) {
  if (str1.length != str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let index = 0; index < str1.length; index++) {
    const character = str1[index];
    frequencyCounter1[character] = (frequencyCounter1[character] || 0) + 1;
  }

  for (let index = 0; index < str2.length; index++) {
    const character = str2[index];
    frequencyCounter2[character] = (frequencyCounter2[character] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (key in frequencyCounter1) {
    if (frequencyCounter1[key] != frequencyCounter2[key]) return false
  }

  return true;
}

(function main() {
  console.log(IsAnagrams("", ""));
  console.log(IsAnagrams("length", "leength"));
  console.log(IsAnagrams("anagrams", "anagrams"));
  console.log(IsAnagrams("anagrams", "agnarasm"));
  console.log(IsAnagrams("cat", "rat"));
})();