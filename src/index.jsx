import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map((emojiEntry) => {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map((x) => {
//   return x * 2;
// });
// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter((num) => {
//   return num > 10;
// });
// console.log(newNumber);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const newNum = numbers.reduce((acc, currentvalue) => {
//   return acc + currentvalue;
// });
// console.log(newNum);

// //Find - find the first item that matches from an array.

// const numbe = numbers.find((numb) => {
//   return numb > 10;
// });
// console.log(numbe);

// //FindIndex - find the index of the first item that matches.

// const newNumb = numbers.findIndex((number) => {
//   return number > 10;
// });

// console.log(newNumb);

// // If you're running this locally in VS Code use the commands:
// // npm install
// // to install the node modules and
// // npm run dev
// // to launch your react project in your browser
