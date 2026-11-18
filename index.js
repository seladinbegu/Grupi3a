//for
console.log("for loop");
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

//while
console.log("while loop");
let j = 0;
while (j < 5) {
  console.log(j); // 0 1 2 3 4
  j++;
}

//do while
console.log("do while loop");
let k = 0;
do {
  console.log(k); // 0 1 2 3 4
  k++;
} while (k < 5);

//forof
console.log("for of loop");
const fruits = ["apple", "banana", "kiwi"];
for (const f of fruits) {
  console.log(f); // apple banana kiwi
}

//forin
console.log("for in loop");
const user = { name: "Ana", age: 25 };
for (const key in user) {
  console.log(key, user[key]); // name Ana, age 25
}

//foreach
console.log("for each loop");
fruits.forEach((f, i) => console.log(i, f));

// == vs ===
let x = 5;
console.log(typeof x);
let y = "5";
console.log(typeof y);

console.log("= = " + (x == y));
console.log("= = = " + (x === y));
