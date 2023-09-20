console.log("Hello World!\n==========\n");
//Higher Order Functions either take a function as a parameter or they return a function
//this first problem is an example of the latter.
function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;
  }
}

const plus15 = plus(15);
console.log(plus15(10));
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//Exercise 2 Section
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((element, index) => {
  console.log(element.name);
});
console.log("EXERCISE 2:\n==========\n");


 const mappedUsers = users.map((element, index) => {
    return {
      name: element.name,
      score: element.score,
    }
  });
  console.log(mappedUsers)
console.log("EXERCISE 3:\n==========\n");
const filterVar = users.filter((element, index) => {
  if (element.isActive == true) {
    return true;
  } else return false;
});

console.log(filterVar);

console.log("EXERCISE 4:\n==========\n");

const sortedScores = users.sort((a, b) => {
  if (a.score < b.score) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedScores);

console.log("EXERCISE 5:\n==========\n");

const reducedScoresSum = users.reduce((accumulator,curr) => {

   return accumulator + curr.score;

},0);
console.log(reducedScoresSum);
console.log(reducedScoresSum/users.length);
console.log("EXERCISE 6:\n==========\n");
