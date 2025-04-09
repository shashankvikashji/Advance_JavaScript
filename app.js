// ***** Arrow Function **** //




//** */ Spread OPERATOR **//

//  let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, ];
//  let message =["Javascript" , "is" , ...spread, ];
//  console.log(message1);
//  console.log(message);


// let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, "and" , "very" ,"powerful"];
//  let message2 =["Javascript" , "is" , ...spread, "and" , "very" ,"powerful"];
//  console.log(message1);
// console.log(message2);

 
// function addTwonum(x,y) {
//     console.log(x+y);
    
// }
// // let arr = [5,9];
// // addTwonum(...arr);







// function addFournum(x,y,z,a) {
//     console.log(x+y+z+a
//     );
    
// }
// let arr1 = [5,9];
// let arr2 = [3,1];

// addFournum(...arr1 , ...arr2);

//***   REST PARAMETER  ***//

// function and defination 

// function someFunction(param1 ,...param2) {
//     console.log(param1,param2);
    
// }
// someFunction("hi" , "there" ,"how are you");


// function addTwonum(x,y) {
//     console.log(x+y);
    
// }

// let result = addTwonum(4,5);
// console.log(result);


// arrow function se add two number
//  let addTwonum = (x,y) => .console.log(x+y);
//  ;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);





// *** Returing array function ***/// 

// let addTwonum = (x,y) => x+y;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);






//** LOCAL VARIABLE IN FUNCTION  **//
// function TestAvailability(x) {
//     console.log("Not Available here" , x);
    
    
// }
// TestAvailability("hiii");
// console.log("Not Available here " , x);

// function TestAvailability() {
//     let y = "localVariable "
//     console.log("Not Available here" , y);
    
    
// }
// TestAvailability("hiii");
// console.log("Not Available here " , y);

// function TestAvailability(y) {
//     let y = "'i' ll return ";
//     console.log("Not Available here" ,y );
//     return y;
    
// }
// let z = TestAvailability();
// console.log("outside the function " , z);
// console.log("not access " , y);







//**  LET VERSUS VAR VARIABLE  **//

// function Doingstuff(params) {
//     if(true){
//         console.log(x);
        
//         var x = "local";
//     }
// }
// Doingstuff();

// function Doingstuff(params) {
//     if(true){
//         console.log(x);
        
//         let x = "local";
//     }
// }
// Doingstuff();

//**   Constant Scope  **//
// function Doingstuff(params) {
//     if(true){     
//         const x = "local";
//     }
//     console.log(x);
    
// }
// Doingstuff();





//**    Global Variable  **//

// let globalvar = "Accessible everywhere";
// console.log("outside function ", globalvar);

// function creatingNewScope(x) {
//      console.log();
     
    
// }

// let x = "global";
// function Doingstuff() {
//     let x = "local"; // when remove let it output are local and local 
//     console.log(x);
    
// }
// Doingstuff();
// console.log(x);


// let x = "global";
//  function Doingstuff(x) {
//     console.log(x);
    
//  }
//  Doingstuff("Params");





                                       //** output find **//

// function config() {
//     x = "guss my scope ";
//     console.log("Inside the function " , x);
    
// } 
//  config();
//  console.log("outside  the function " , x);
 




                                    //*** */ Immediate involved function Expression -- IIFE  ***//
//**   (); is used to involve function **/
// (function () {
//     console.log("TTTTTT");
    
// })();



                                                 //** Arrow function  */
// (()=>{
//     console.log("run that path");
    
// }

// )();






                                                //*** Recursive Functions  ***//
                                                    
// 
// function getRecursive(nr) {
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);
//     }
// }

// getRecursive(3);

// function logRecursive(nr) {
//     console.log("started function ", nr);
//     if(nr>0){
//     logRecursive(nr-1);
//     }else{
//         console.log("done with recursion");
        
//     }
//     console.log("Ended fun" , nr);
    
// }

// logRecursive(3);





