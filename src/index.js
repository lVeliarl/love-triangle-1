module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) { 
    let n = i + 1;
    let k = preferences[n - 1];
    let l = preferences[k - 1];
    let m = preferences[l - 1];
    if (m === n && n!==k && n!==l && k!==l) {
      counter++;
    }
  }
  return counter / 3;
}