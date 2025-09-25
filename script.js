// 🔹 For Loop (5 Questions)

// 1. Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Loop starts at 1 and runs until 10.

// 2. Print the even numbers between 1 and 20

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
// i starts from 2, increases by 2 each time → only even numbers.

// 3. Print the multiplication table of 7

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
// Multiplies 7 with i (1 to 10)

// 4. Print numbers from 10 down to 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Loop decreases i by 1 until it reaches 1.

// 5. Find the sum of first 50 natural numbers

let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i; // add each number to sum
}
console.log("Sum of first 50 natural numbers:", sum);

// 🔹 While Loop (5 Questions)

// 6. Print numbers from 1 to 5

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Loop continues while i ≤ 5.

// 7. Print the odd numbers from 1 to 15

let j = 1;
while (j <= 15) {
  console.log(j);
  j += 2; // increase by 2 → odd numbers
}

// 8. Find the factorial of 5

let num = 5;
let fact = 1;
while (num > 0) {
  fact *= num; // multiply with each number
  num--;
}
console.log("Factorial of 5:", fact);

// 9. Print numbers from 20 to 10
let k = 20;
while (k >= 10) {
  console.log(k);
  k--;
}

// 10. Keep printing numbers until the sum becomes greater than 30

let total = 0;
let n = 1;
while (total <= 30) {
  console.log(n);
  total += n;
  n++;
}
console.log("Final Sum:", total);

// 🔹 Do While Loop (5 Questions)

// 11. Print numbers from 1 to 5

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);
// Do-while runs at least once even if condition is false.

// 12. Print the multiples of 3 up to 30

let b = 3;
do {
  console.log(b);
  b += 3;
} while (b <= 30);

// 13. Print numbers in reverse order from 15 down to 1

let c = 15;
do {
  console.log(c);
  c--;
} while (c >= 1);

// 14. Print numbers until the product exceeds 1000

let d = 1;
let product = 1;
do {
  product *= d;
  console.log(`Number: ${d}, Product: ${product}`);
  d++;
} while (product <= 1000);

// 15. Print numbers from 1 to 10, but skip 5

let e = 1;
do {
  if (e !== 5) {
    console.log(e);
  }
  e++;
} while (e <= 10);

// 🔹 Conditional Statements (5 Questions)


// 16. Positive, Negative, or Zero

let num1 = -3;
if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 17. Even or Odd

let num2 = 7;
if (num2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 18. Largest of three numbers

let x = 10, y = 25, z = 15;
if (x > y && x > z) {
  console.log("Largest is:", x);
} else if (y > z) {
  console.log("Largest is:", y);
} else {
  console.log("Largest is:", z);
}

// 19. Leap Year Check

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}

// 20. Print day of week (1–7)

let day = 3;
if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid number");