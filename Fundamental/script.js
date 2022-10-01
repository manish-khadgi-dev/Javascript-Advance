// /* multi
// line 
// code */


// s

// // == declaring varibles
// // var, let , const 

// var myName = "Manish";
// let address = "113/36 cowper street, Parrmatta NSW 2150"
// const dob = "03-03-1999"

// console.log(myName);
// console.log(address);
// console.log(dob);



// ========operators



// const result = a + b;  +  Addition
// const result = a - b;  -  subtraction
// const result = a * b;  *  multiplciation
// const result = a * b;  **  Exponentiation
// const result = a * b;  /   Divide
// const result = a * b;  %  Modulus ( Division)
// a++; ++ Increment
// a--; -- Decrement

// const a = 4
// const b = 7
// console.log(result);


// ======Comparision
// const v1 = 10;
// const v2 = 10;
// ==
// ===
// >, >=
// <, <=

// const result = v1 == v2;
// const result = v1 === v2;

// const result = v1 <= v2;
// console.log(result);

// ========Math Object====
// const val = Math.PI;
// const val = Math.round(4.7);
// const val = Math. pow(8,2)
// const val = Math.sqrt(64);
// const val = Math.ceil(4.4);
// Math.floor(4.7);
// Math.min(0,150,30,20,-8,-200);
// Math.max(0,150,30,20,-8,-200);
// Math.random();

// console.log(val);


// truthy values = "string ", 88, obj , array , function
// falsey value = '', 0 , null, undefined, false
// JS Conditional Statement

// // IF Statement
// const age = 18
// const g = "m"
// // if(age >= 18 && g == "f" ) {

// //     console.log("Let's go to party")
// // }
// // else {
// //     console.log("Go home ");
// // }
// // Ternery code=> condition ? truecode : falsecode
// age < 18 ? console.log ("welcome to the party") : console.log("Go home Kiddo");


// const pet = "dragon"
// if(pet == 'dog'){
//     console.log("woof")

// } else if(pet == 'cat'){    
//     console.log("meow")

// } else if(pet == 'dragon'){    
//     console.log("Roar")

// } else {    
// console.log("LOndo");
// }


// SWITCH
// const pet ='hippo'
// switch(pet){
//     case 'dragon' : 
//     console.log('ROaaaaaar');
//     break;

//     case 'dog' : 
//     console.log('VOOOW');
//     break;

//     case 'Cat' : 
//     console.log('Meow');
//     break;

//     case 'Hippo' : 
//     console.log('Radoo');
//     break;

//     default:
//     console.log('Mo mo mo mo');
// }


 // JS - Error Handling

// try{
//  throw new Error("User Already exist");
//  const val =  a + 5 ;
//  console.log("running code in try block", val);

//  }catch(error){
//     console.log("running code in try block");

// } finally{
//   console.log("running code in try block");
// }

    // JS - Scheduling
    // setTimeout

    // setTimeout(() => {
    //     console.log("Subscribe and get 10% off")
    // },3000);

    // let i = 0;
    // setInterval(()=>{
    //     i++;
    //     console.log("run....",i);
    // },1000);

    // let i = 0;
    // const timer = setInterval(() =>{
    //     i++;
    //     console.log("----",i);
    //     if (i ===5 ){
    //     console.log ("time has stopped");
    //     clearInterval(timer);
    //     }
    //     },1000);

    // console.log("1 exc");
    //      setTimeout(()=>{
    //      console.log("2 exec")   
    //      },300)

    //       console.log("3 exc")

    //        setTimeout(()=>{
    //         console.log("4 exec")

    //     },0)

//    JS - ES6
// 1. Let, const
// 2. Template Literals

// const name = "Manish"
// const address = "Sydney"
// const Ph = "0450345782"

// // const str = "Hi my Name is  "+ name +". And live in " + address;

// const str = `
// Hi my name is ${name}. 
// And I live in ${address}
// My Phone number ${Ph}`;
// console.log(str);




// 3. Arrow function
// console.log("1....");
// console.log("2....");

// function add(a, b){
//     console.log("2 exec");
//     return a+b;
// }


// const add = (a, b) =>{
//     return a*b;
// }

// const add = (a, b) => a * b;

// const ans = add(3,4);
// const ans2 = add(123,123);

// console.log(ans, ans2);

// **************** LOOPS ***********
// for (i = 0; i < cars.length; i++)

// for(let i = 0; i < 10; i++){
//     if ( i % 2 == 0){
//     console.log(i);
//   }
// }


// let i = 0;
// while(i < 100 ){
//   if (i % 2 == 0){
//     console.log(i);
//   }
//   i++
//   }


// let i = 100;
// do {
//     if (i % 2 === 0 ){
//         console.log(i);
//     }
//     i++;
// } while (i < 100);


    // let i = 0;
    // while (i < 100) {
    //     i++;
    //     if (i % 2 === 0)
    // }


// ********* JS - Data manipulation ***********
//Number
// => safe number = -2^53-1 to 2^53-1
//Nan => Not a number , isNaN()

// const a = "5";
// const num = Number(a);
// console.log(isNaN(num), typeof num);


//****** String */

// const str = "Hi there, My Name is Manish and I live in Parramatta"

// const val = str.length;
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str.indexOf("i");
// const val = str.lastIndexOf("i");
// const val = str.replaceAll("i","w");
//  const val = str.substring(4, 10);

// console.log(val);

// *********** Array manipulaiton *********//


// const fruits = ['apple','banana','orange','pineapple','tomato'];
// const veggie =["potato", "Cabbage"];
// console.log(fruits[1]);
// const removedItem = fruits.pop();
// console.log(fruits,removedItem);


// fruits.reverse();
// fruits.sort();
// console.log(fruits);

// const newBucket = [...fruits, ...veggie];
// console.log(newBucket.join("-"));



// /*********ARRAY LOOP********** */

// console.log(newBucket);
// for (let i =0; i , newBucket.length; i++)
// {
//     console.log(newBucket[i]);
// }

// newBucket.forEach((item, i) => {
//     console.log(item,i)
// });


// const newArg = newBucket.map((item, i) => {
//     console.log(item, i);
//     return "SKU-" + item;
//  });
// console.log(newArg);


// const newArg = newBucket.filter((item, i) => {
//     console.log(item, i);
//     return !item.includes("p");
// });
// console.log(newArg);


// ********Find , some & every******

// const newArg = newBucket.find((item, i)=>{
//     return item.includes("p");

// });
// console.log(newArg);



// const newArg = newBucket.every((item, i)=>{
//     return item.includes("a");

// });
// console.log(newArg);


// const bank = [123, 234, 235,345,56,5];
// const totalMoney = bank.reduce((subTotal,value)=>{
//     console.log (subTotal);
// return subTotal + value;
// },0)
// console.log(totalMoney);


// CHALLENGE
// 1. Create an array of 50 random numbers range between 1 to 100 prgramatically.

// const args =[];
// let random=Array.from({length: 50}, () => Math.floor(Math.random() * 100));
// console.log(random);


// // 2. sort that array in descending order
// console.log(random.sort((a,b) => a-b)) ;

// // 3. get the total value of the array
// const totalValue = random.reduce((subTotal,value)=>{
// return subTotal + value;
// },0)
// console.log(totalValue);

// // 4. create a odd and even array 

// const odd = random((item,i)=>{
//     return item;
//     })
// console.log(odd);



// // 1. Randome Number of 50 less than 100
// const args = [];
// for (let i = 0; i < 50; i++){
//   const num = Math.floor(Math.random()*100) + 1;
//   args.push(num);
// }
// console.log(args);

// // ANS -2
// console.log(args.sort((a,b)=> a-b));


// // ANS - 3 
// const total = args.reduce((subTotal, num) => {
// return subTotal + num ;
// },0)

// console.log("The total is " + total);


// // ANS -  4
// const oddNum = args.filter((item) => item % 2  !== 0);
// // ANS - 5
// const evenNum = args.filter((item)=>item % 2 === 0);
// console.log(oddNum, evenNum);


// // Remove Duplicates

// const uniqueArg = []
// for (let i = 0; i < args.length; i++){
//     const picked = args[i]
//     console.log(picked);
//     if(!uniqueArg.includes(picked)){
//         uniqueArg.push(picked);
//     }
// }

// console.log(uniqueArg);

// Challenge 2 
//1. Create an array of 50 random unique numbers range between 1 to 100 programatically.
// const Array = [];
// let i = 0;
// while(Array.length < 50) {
// i++;
// const num = Math.floor(Math.random() * 100) + 1;
// if (!Array.includes(num)){
// Array.push(num);
// }
// }
// Array.sort();
// console.log(Array);

//*******JS - Data Manipulation****/

// const person = {
//     fName: 'Manish',
//     lName: 'Khadgi',
//     phone: 98897,
//     add:'Sydney'
// };

// person.country = "Australia";
// delete person.phone;
// const val = person.add
// console.log(val, person);

// const mouse ={
//     Name : 'Moon',
//     training: {
//         name : 'Jrp',
//         duration: '7m',
//         topic: ['html', "css", "Js"]
//     },
//     speak: () => {
//         return "Hi There this is " + mouse.Name;
//     }
// };
// // console.log(mouse.training.topic[1]);

// // const val = Object.keys(mouse);


// const val = mouse.speak();
// console.log(val);



// primitive data types

// let a = 5
// console.log(a)

// const b = a;
// a = 8;

// console.log(a, b);



// const a = {
//     name: "sham",
// };

// console.log(a);
// const b = {...a};

// a.name = "harry";

// console.log(a, b)


// let money = 0.1;
// for (i = 1; i <= 31; i++){
//     money = money * 2;

// }
// console.log(money)


// const person = {
//   fName: "Sam",
//   lName: "Smith",
//   add: "Sydney",
//   age: 55,
//   partner: "no idea",
// };

// const training = {
//   course: "JRP",
//   duration: "6m",
//   skills: ["Html" , "CSS"]
// };


//******Old Style  */
// const p2 = Object.assign({}, person);
// delete p2.training;
// console.log(person, p2);


//*****NEW Style */
// const {training, ...p2} = person; //  training p2 ma hataune -- rest


// const p2 = {...person};  // spread
// console.log(person ,p2, person == p2);

// console.log(person , training);

// const combo = {...person, ...training, test :"something"};

// console.log(combo);


// ****EVENTLOG***
// console.log("1. pring..");

// setTimeout(()=>{console.log("2. pring..");
// },1000)

// console.log("3. pring..");

// let sayHey = () => {
//     console.log("4. pring..");
// }

// setTimeout(()=>{console.log("5. pring..");
// },0)
// sayHey();
// console.log("6. pring..")


// ANS - 1 , 3 ,4 , 6 , 5 ,2


//*****DATE OBJ****/

// const today = Date();
// const today = Date.now();
// const date = Date.now("2020-20-02");
// const date = new Date("2020-03-02");
// const val = date.toLocaleDateString();
// const val = date.getMonth();
// const val = date.getFullYear();

// console.log(val);