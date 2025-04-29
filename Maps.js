// ---   *** JavaScript Maps ***  ----- // 

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["orange" , 200]
// ]);
// console.log(newMap);


// create Map 
// const fruits = new Map();
// // Set Map 
// fruits.set("apple" , 500);
// fruits.set("banana", 200);
// fruits.set("orange", 200);
// console.log(fruits);



// Return objects :- types of fruits 
// instanceofMap return true

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["orange" , 200]
// ]);
// console.log(fruits.size);
// //console.log(fruits.delete("apples"));
// //console.log(fruits.size);
// fruits.clear();
// console.log();


//Map.has() // return true 
//console.log(fruits.has("apples"));

// let text = "";
// fruits.forEach(function(value , key){
//     text += key + '=' +value;
// })
// console.log(text);

//Map.entries();


// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);


// laist all keys 
// let text = "";
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);



// Map.values()
// let text = "";
// for(const x of fruits.values()){
//     text += x;
// }
// console.log(text);



// // Sum all value 
// let total = 0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);

// Creates Object 
// const apples = {name: 'Apples'};
// const banana = {name: 'Banana'};
// const grapes = {name: 'Grapes'};

// // create a map 

// const fruits = new Map();
// fruits.set(apples , 500);
// fruits.set(banana , 300);
// fruits.set(grapes , 200);

// console.log(fruits.get("apples"));


// ---- **** JavaScript Destructing :-
//  Destructuring is a powerful feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
//  This syntax makes it easier to work with complex data structures by extracting only the necessary parts.

// Create an object 
// const Person = {
//     firstName : "Shivam",
//     lastname : "Singh",
//     age : "22"
// };

// Destructuring 
//let{firstName,lastname} = Person ;

// Again 
// This order of property does not match in this 
// let{lastname,firstName} = Person ;
// console.log(Person);


// object default 

// const Person = {
//     firstName : "Shivam",
//     lastname : "Singh",
//     age : "22"
// };

//  Alies creation 

// const Person = {
//     firstName : "Shivam",
//     lastname : "Singh",
//     age : "22"
// };

// // Destructuring in String  -> 29 april 

// let name = "GurukulTheSchool";
// let[a1 , a2 , a3 , a4 ,a5] = name;
// console.log(a1);
// console.log(a2);

// Array destrucruring 

// const fruits = [ "banana" ,"orange", "apple" , "Mango" ];
// //let[f1,,f2] = fruits;
// //console.log(f1,f2);
// // Destructuring 
// let{[0]:f1 , [1]:f2} = fruits;
// console.log(f1,f2);


// // -> Rest Property
// // rest banane ka tarika trple dot 
// const num = [10,20,30,40,50,60,70];
// //Destructuring 
// const[a,b,...rest] = num;
// console.log(a,b,rest);

// -> maps

// // swap two variable 
// let firstName = "Shivam";
// let lastname = "Verma";
// //Destructuring 
// [firstName , lastname] = [lastname , firstName];
// console.log(firstName,lastname);



// // -> JavaScript Exponentiation(**) Operator 
// let x = 5;
// let z = x**2;
// let y = Math.pow(x,2);
// console.log(z);
// console.log(y);


// // Expo Assignment 
// let x = 5;
//  let z = x**=2;
//  console.log(z);
 

//Array includes :- it is case sensective 


/* const f1 = ["banana" ,"orange", "apple" , "Mango"];
console.log(f1.includes("Mango"));
console.log(f1.includes("banana",3));
 */



// Trailing comma :- not more than one 

// const arr = ["one","two","three",,];
// console.log(arr.length);


// SparseArray

/* const spA = [1,,,4,5,,];
console.log(spA.length);

 */













