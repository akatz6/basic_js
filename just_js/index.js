// This is a single line comment

/* 
This is a multiple 
line comment
*/

const obj = {
  firstName: "Aaron",
  lastName: "Katz",
};

console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);

let bool = true;
console.log(bool);
bool = false;
console.log(bool);

let number = 12;
console.log(number);

const myFirstName = obj.firstName;
const myLastName = obj.lastName;

console.log(
  "My first name is " + myFirstName + " and my last name is " + myLastName
);

console.log(
  `My first name is ${myFirstName} and my last name is ${myLastName}`
);

const numberTwo = 2;
const add = number + numberTwo;
console.log(add)

const multiple = number *  numberTwo;
console.log(multiple)

const divide = number /  numberTwo;
console.log(divide)

const mod = number %  numberTwo;
console.log(mod)

const modRemainder = number %  (numberTwo + 3);
console.log(modRemainder)

const alwaysTrue = true && true
console.log(alwaysTrue)

const alwaysFalse = true && false
console.log(alwaysFalse)

const orAlwaysTrue = true || false
console.log(orAlwaysTrue)

const orAlwaysFalse = false || false
console.log(orAlwaysFalse)

console.log(7 == "7")
console.log(7 === "7")

console.log(7 != "7")
console.log(7 !== "7")

console.log(7 <= 7)
console.log(7 < 7)