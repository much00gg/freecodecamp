function palindrome(str) {
  // Good luck!
  var loStr = str.toLowerCase();
  var newStr = loStr.replace(/[^a-z0-9]/g, "");
  var polStr = newStr.split("").reverse().join("");
  //return palindrome(str);
  str = polStr;

  if(str.length === 0) {
    return true;
  }
  if (str[0] !== str[str.length-1]) {
    return false;
  }
  return palindrome(str.slice(1,str.length-1));
}


palindrome("eye");
