


//String length: length property returns the length of the string.


const str = "Hello, World!";
const length = str.length; // length is 13



// String slice(): Returns a portion of the string.


const str = "Hello, World!";
const sliced = str.slice(0, 5); // sliced is "Hello"





// String substring(): Similar to slice, but doesn't accept negative indices.


const str = "Hello, World!";
const substring = str.substring(0, 5); // substring is "Hello"



// String substr(): Returns a specified number of characters from a start index.
const str = "Hello, World!";
const substr = str.substr(0, 5); // substr is "Hello"





// String replace(): Replaces a specified substring with another string.
const str = "Hello, World!";
const replaced = str.replace("World", "Universe"); // replaced is "Hello, Universe!"




// String replaceAll(): Replaces all occurrences of a substring with another string (ES2021).
const str = "Hello, World, World!";
const replacedAll = str.replaceAll("World", "Universe"); // replacedAll is "Hello, Universe, Universe!"




// String toUpperCase(): Converts the string to uppercase.
const str = "Hello, World!";
const upper = str.toUpperCase(); // upper is "HELLO, WORLD!"


// String toLowerCase(): Converts the string to lowercase.
const str = "Hello, World!";
const lower = str.toLowerCase(); // lower is "hello, world!"



// String concat(): Combines two or more strings.
const str1 = "Hello, ";
const str2 = "World!";
const combined = str1.concat(str2); // combined is "Hello, World!"

// String trim(): Removes leading and trailing whitespace.
const str = "   Hello, World!   ";
const trimmed = str.trim(); // trimmed is "Hello, World!"


// String trimStart(): Removes leading whitespace (ES2019).
const str = "   Hello, World!";
const trimmedStart = str.trimStart(); // trimmedStart is "Hello, World!"

// String trimEnd(): Removes trailing whitespace (ES2019).
const str = "Hello, World!   ";
const trimmedEnd = str.trimEnd(); // trimmedEnd is "Hello, World!"






// String charCodeAt(): Returns the Unicode value of the character at a specified index.
const str = "Hello, World!";
const charCode = str.charCodeAt(7); // charCode is 87 (the Unicode value for "W")




// String split(): Splits a string into an array of substrings based on a delimiter.
const str = "apple,banana,kiwi";
const fruits = str.split(","); // fruits is ["apple", "banana", "kiwi"]