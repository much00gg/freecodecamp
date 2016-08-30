
function largestOfFour(arr) {
  // You can do this!
  var total = 0;
  for(var i=0; i < arr.length; i++) {
    for(var j in arr) {
    total += arr[j][i];
    }
    console.log(total);
  }
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
