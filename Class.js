// reduse of code is inheritance 

// class ClassName{
//      constructor(prop1 , prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//      }
// }

// let obj = new ClassName("arg1" , "arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// this keyword refer to obj refers to the obj it belong to 




// class Dog{
//     constructor(dogname , color , weight , breed){
//         this.dogname = dogname;
//         this.color = color;
//         this.weight = weight;
//         this.breed = breed;
//     }
// }
 
// let dog = new Dog("tomy" , "black" ," 5.5" , " german");
// console.log(dog.dogname , dog.breed, dog.color ,dog.weight);


//------------------------------------  ***CLASSES***  ---------------------------------------------------//

// it is imp to class name is capital 

// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Shivam" , "Verma");
// console.log(p.firstname , p.lastname);




///----------- *** Method :- function on a class is called a method 


// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;        
//         this.lastname = lastname;
//     }


// greet(){
//     console.log("Hii there hlo ",this.firstname);
    
// }

// }
// let p = new Person("shivam" , "Verma");
// p.greet();



// use of greet and complement method 
// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;        
//         this.lastname = lastname;
//     }


// greet(){
//     console.log("Hii there hlo ",this.firstname);
    
// }
// compliment(name , object){
//     return "This is wonderfull" + object + " ," + name;
// }
// }

// let p = new Person("shivam" , "Verma");
// p.greet();


// let compliment = p.compliment("Harry" , "bhai");
// console.log(compliment);


//Private atribute 
// class Person{
// #firstname;
// #lastname;

// constructor(firstname , lastname){
//     this.#firstname = firstname;
//     this.lastname = lastname;
// }

// }

// let p = new Person("shivam" , " verma ");
// console.log(p.firstname);


// Validation step 
// class Person{
//     constructor(firstname , lastname ){
//         if(firstname.startwith("N")){

//         }
//     }
// }


// Getter and setter 

// class Person{
//     #firstname;
//     #lastname;
    
//     constructor(firstname , lastname){
//         this.#firstname = firstname;
//         this.lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//          this.#firstname = firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Shivam" , "Dubey");
// console.log(p.firstname);
// p.firstname = "hello";
// console.log(p.firstname);
// console.log(p);


//--- Inheritance -- 


// class vechicle{
//     constructor(color , currentSpeed , maxspeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxspeed = maxspeed;
//     }
//     move(){
//         console.log("Moving at " , this.currentSpeed);
        
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends vechicle{
//     constructor(color,currentSpeed,maxspeed,fuel1){
//         super(color,currentSpeed,maxspeed);
//         this.fuel1 = fuel1;
//     }
//    doWheelier(){
//     console.log("Driving on one wheel ");
    
//    }

// }
// let motor = new Motorcycle("Black" , 0 , 250 , "gasoline");
// console.log(motor.color);
// motor.accelerate(30);
// motor.move();




// ------ ** Prototypes :- In JavaScript, the prototype property allows you to add new properties and methods to object constructors. 
// This is a key feature of JavaScript's prototype-based inheritance system.


class Person{
    constructor(firstname , lastname){
        this.firstname = firstname;        
        this.lastname = lastname;
    }


greet(){
    console.log("Hii there hlo ",this.firstname);
    
}
}

Person.prototype.introduce = function (){
     console.log("Hi i am " , this.firstname);
     
};

Person.prototype.favcolor = "green";

let p = new Person("Shivam" , "verma");
console.log(p.favcolor);
p.introduce();



