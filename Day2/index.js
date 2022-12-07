let challenge = "30 days of JavaScript";
let challenge2 = "        30 days of JavaScript             ";
let con1 = '30 Days of';
let con2 = 'Javascript';
let countries = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let sentence = "You cannot end a sentence with because because because is a conjunction";
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
console.log(challenge);

//2. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//3.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//4.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//5.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2));

//6.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,22));

//7. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//8. Split the string into an array using split() method
console.log(challenge.split());

//9. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

//10. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log(countries.split(' '));

//11. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

//12. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//13. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

//14. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//15. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//16. Use indexOf to find the position of the first occurrence of the word because in the following
// sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

//17. Use lastIndexOf to find the position of the last occurrence of the word because in the 
//following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

//18. Use search to find the position of the first occurrence of the word because in
// the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));

//19.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge2.trim());

//20. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

//21. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

//22. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

//23. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(con1.concat(con2));

// 24. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));


//Exercise Level 2 
console.log("The quote '\There is no exercise better for the heart than reaching down and lifting people up.\'by John Holmes teaches us to help one another. ")

let num = '10';
console.log(typeof(num))
num = parseInt(num);
console.log(typeof(num))

let num1 = '9.8';
num1 = parseFloat(9.8);
console.log(typeof(num1))
console.log(Math.round(num1));

let p = "python";
let j = "jargon";
console.log(p.includes('on'));
console.log(j.includes('on'));
console.log(p.match('on'));
console.log(j.match('on'));

let jargon = " I hope this course is not full of jargon"
console.log(jargon.includes('jargon'));

let num3 = Math.floor(Math.random()*101);
console.log(num3);

let num4 = Math.floor(Math.random() * 51) + 50;
console.log(num4);

let num5 = Math.floor(Math.random() * 256);
console.log(num5);

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let love1 = /love/gi
console.log(love.match(love1));