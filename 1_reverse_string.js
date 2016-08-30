function reverseString(str) {
  var splitString = str.split("");
  var revString = splitString.reverse();
  var joinString = revString.join("");

  return joinString;
  //return str.split("").reverse().join("");
}

reverseString("hello");
