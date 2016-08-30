
function findLongestWord(str) {

  splitArray = str.split(" ");

  var bNum = 0;

  for (var i=0; i < splitArray.length; i++) {

    if (splitArray[i].length > bNum) {

      bNum = splitArray[i].length;
    }
  }

  return bNum;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
