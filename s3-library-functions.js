// -------------------s3sivaram@gmail.com-----functions built for self use---------------

/*
  find the consecutive chars in a string
  "leet" = e, "feet"=e,"foot"=o

  */
// ----------------------------------------------------------------------
function charwiseCount(str) {
  /* 

   This function splits the string into an array and create an object having character wise count.
   Input to function: String.
   Output: Object

  */
  let obj = str.split("").reduce((a, e) => {
    return { ...a, [e]: a[e] + 1 || 1 };
  }, {});
  return obj;
}
// ----------------------------------------------------------------------

function firstlastPosition(str, char) {
  /* 
  
    This function returns the first and the last position of a character in the given string
    Input to function: String , character.
    Output :Returns an array with first position ans last position "[first,second]"

    
  */
  let firstpos = str.indexOf(char);
  let lastpos = str.lastIndexOf(char);
  return [firstpos, lastpos];
}

function consecutiveCharLength(str) {
  /*
    
    Inputs needed: A string
    output: An array.consisting of chars that are appearing sequentially
    e.g:"footfeet" ===> [ 'oo', 'ee' ]

   */

  let startpointer = 0;
  let endpointer = str.length;
  let arrowpointer = 1;
  let seqchars = [];
  while (startpointer < endpointer) {
    if (str.substr(startpointer, 1) == str.substr(arrowpointer, 1)) {
      arrowpointer = arrowpointer + 1;
      while (str.substr(startpointer, 1) == str.substr(arrowpointer, 1)) {
        arrowpointer = arrowpointer + 1;
      }
      seqchars.push(str.substr(startpointer, arrowpointer - startpointer));

      startpointer = arrowpointer;
      arrowpointer = startpointer + 1;
    } else {
      startpointer = startpointer + 1;
      arrowpointer = arrowpointer + 1;
    }
  }
  // console.log(seqchars);
  return seqchars;
}

// ----------------------------------------------------------------------

function isVowel(char) {
  /*
  Input: char.
  output: Boolean - True if char is a vowel , False if char is not a vowel

  e.g: "a' => True, "b"=> False
  */

  console.log(char);

  let vowels = ["a", "e", "i", "o", "u"];
  for (e in vowels) {
    // console.log("e=",e);
    if (vowels[e] == char) {
      return true;
    }
  }
  return false;
}

// ----------------------------------------------------------------------

function mainFunc(str) {
  console.log("string=", str);

  let resobj = charwiseCount(str);
  // console.log(resobj);

  let char = "e";
  let [firstpos, lastpos] = firstlastPosition(str, char);
  // console.log("firt ,last pos=", firstpos, lastpos);

  let seqcharlist = consecutiveCharLength(str);
  console.log(seqcharlist);
}
// --------------------------------------------Main flow------------------------
mainFunc("aaeaee");
// let res = isVowel("b");
// console.log(res);
