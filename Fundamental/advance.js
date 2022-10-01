// OOP =- Object oriented paradim 

// Objects => Property and methods
// const obj = {};
// console.log(obj);

// class
// class Person {
// constructor (firstName, sk) {
//  this.firstName = firstName;
//  this.skls = sk;
//  }
//  bio(){
//     return`Your Name is ${this.firstName}`;
//  }
//  skills (){
//     this.bio();
//     return `He has following skills ${this.skls}`
//  }
// }


// class pet {
//     constructor(name, owner){
//         this.name = name;
//         this.name = owner;
//     }
//     whos(){
//         return `${} belongs to ${}`
//     }
// }
// This keywords
// Constructor
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism
// const premBio = new Person("Prem", "html and css");
// console.log(premBio.bio());
// console.log(premBio.skills());

// const samBio = new Person("Syal", "html, css ");
// console.log(samBio.bio());
// console.log(samBio.skills());
// console.log(samBio.skls);
// samBio.age = 88;
// console.log(samBio.age);


// const cat = new Pet {"Romio"}

// == Functional Programming

// Side effects
// Pure Function


// const intro = ({ firstName, dob }) => {
//   console.log(firstName);
//   return firstName + " is " + dob + " years old.";
// };

// const perform = (skills, action) => {

//   return `Person has the ${skills} skills, that's why they do ${action}`;
// };

// const prem = {
//   firstName: "prem",
//   s: "coding",
//   a: "building system",
//   dob: "32-45",
// };

// const val = intro(prem);
// const val2 = intro(prem);
// const val3 = intro(prem);
// console.log(val);

// let multi = 0;

// const cal = (q) => {
//   multi++;
//   return q * multi;
// };

// for (let i = 0; i < 10; i++) {
//   console.log(cal(2));
// }

// High order function
//=> a function that returns a functior or/and takes function as arguments

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};



// const calculator = (a, b, func) => {
//   return func(a, b);
// };

// const result = calculator (3, 4, multi )
// console.log(result);


// const obj = {
//    a : add,
//    s : sub,
//    m : multi
// };

// const calculator = (alphabet) => {
//   return obj[alphabet]
// };

// const ans =  calculator("a");
// console.log(ans(3, 4))


// const calculator = () => (a, b) => a + b;

// const ans = calculator()(4, 5) + sub(4, 5);

// console.log(ans);



// Recursion

// const arg = [21, 42, 53, 67, 65, 85, 76, 434, 5, 8, 7];

// let sum = 0; 
// const callMe = (prem) => {
//   console.log(sum);
//   if (prem.length) {
//     sum += arg.pop();
//     callMe(prem);
//   }

//   return sum;
// };

// const ans = callMe(arg);

// console.log(ans);

//0 = fale , !0 = true


const arg = [3, 2, 5, 5 ];
let ttl = 0;
const sum = (total) => {
    console.log (ttl);
    if (total.length) {
        ttl +=arg.pop();
        sum(total);
    }
    return ttl;
    sum(total);
};

const total = sum(arg);
console.log(total);


// const sum = () => {
//     if (.length){
//         ttl += arg.pop();
//         sum (num)
//     }
// }