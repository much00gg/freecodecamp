function titleCase(str) {
  str = str.toLowerCase().split(" ");    // will split the string delimited by space into an array of words

  for(var i = 0; i < str.length; i++) {  // str.length holds the number of occurrences of the array...
    str[i] = str[i].split('');           // splits the array occurrence into an array of letters
    str[i][0] = str[i][0].toUpperCase(); // converts the first occurrence of the array to uppercase
    str[i] = str[i].join('');            // converts the array of letters back into a word.
  }

  return str.join(" ");                    //  converts the array of words back to a sentence.
}

titleCase("I'm a little tea pot");
