
//Problem with 'this' inside timeout
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`); }
// };
// user.sayHi(); //works setTimeout(user.sayHi, 2000); //problem
// setTimeout(user.sayHi, 2000);

//Solution.1: to the loss of 'this'
// setTimeout(function() 
//                     {
//                         user.sayHi();
//                     }
//                 , 2000);

// setTimeout(() =>
//                 {
//                     user.sayHi();
//                 }
//             , 2000);
/*
This represents the object calling the function - in the first case, the object is user since
-In the second case, the Object is window because setTimeout is a method of window and user.sayHi is a reference to the sayHi fucnction,
which has been passed as an argument to the setTimeout method, when it is called inside setTimeout, the Lexical Context ans value of 'this'
will be window... and there is no variable called 'firstName' in the window LE.

This problem can be explained using the 'Function Binding' concept in JavaScript
-The genral rule is that 'this' refers to the Object that calls the function
    -Since functions can be passed to different Objects in JavaScript, the same 'this' can reference different Objects at different times
        -there is a known problem: losing 'this'
    -This does not happen in languages like Java where functions always belong to the same object

How do we solve this problem?
*/

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//         showList: function() {
//             this.students.forEach(
//                         (student) => {
//                         console.log(this.title + ": " + student);
//                     }
//                 );
//     }
// };
//     group.showList();

//Question.2.
// function printNumber(from, to){
//     let currentNumber = from;
//     let timerId = setInterval(() => {
//         console.log(currentNumber);
//             if(currentNumber === to){
//                 clearInterval(timerId);
//             }
//             currentNumber++;
//         },1000);
// }

// printNumber(1, 10);

//Question.3.
// let i = 0;
// setTimeout(() => alert(i), 100);
// for(let j = 0; j < 100000000; j++){
//     i++;
// }

//When will the scheduled function run? After the loop
//What is alert going to show? It will show the value of j at the end of the end of the loop, which is 100000000.

// function makeArmy(){
//     let shooters = [];
//     let i = 0;
//     while(i < 2){
//         let shooter = function(){
//             alert(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }

// let army = makeArmy();
// army[0];

// function askPassword(ok, fail){
//     let password = prompt("Password", '');
//     if(password === "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: 'John',
//     loginOk(){
//         alert(`${this.name} logged in`);
//     },
//     loginFail(){
//         alert(`${this.name} failed to log in`);
//     }
// }

// askPassword(user.loginOk, user.loginFail);
/**Using bind to solve the Self Pattern problem */
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"]
// };


// function showList() {
//     this.students.forEach(function(student) {
//     console.log(this.title + ": " + student
// );
//     }, this);
// }
// let showListCall = showList.bind(group)
// showListCall();

// Object.prototype.name = value // syntax
//In JavaScript, functions are also objects
/**Prototypal Inheritance
 * -What is a prototype?
 * -What is prototype chaining?
 * -What is prototypal inheritance
 */
/**
 * call, apply, and bind methods
 * -Used for function borrowing: use a function from another object wiht data of another object
 */
// let personName = {
//     firstName: "Eria Othieno",
//     lastName: "Pinyi",
// }
//The first argument must always be the first argument of the call method
// printFullName.call(personName, "Iowa", "Fairfield");

// let actorName = {
//     firstName: "Bruce",
//     lastName: "Lee"
// }

// actorName.printFullName();
// printFullName.call(actorName, "Illinois", "Chicago");

// function printFullName(state, city){
//     console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}.`);
// }

// console.log("Using APPLY method")
// printFullName.apply(personName, ["Iowa", "Ottamwa"]);


// class User{
//     constructor(age){
//         this.age = age;
//     }

//     set ageSet(age){
//         age = age;
//     }
//     get ageGet(){
//         return this.age;
//     }
// }

// let user = new User(12);
// console.log(user.age);
// user.ageSet = 5;
// console.log(user.ageGet);

/**EXAM PREPS */
//Classes
// //Class syntax
// class User{
//     constructor(name = "Eria"){
//         this.name = name;
//     }
//     sayHi(){
//         console.log('Hi ' + this.name);
//     }
// }

// //Constructor Function - JavaScript classes are consrutctor functions
// // function User(name){
// //     this.name = name;
// // }

// // User.prototype.sayHi = function(){
// //     console.log(`Hi ${this.name}`);
// // };

// let user1 = new User();
// console.log(User);
// console.log(user1);
// console.log(user1.__proto__);
// console.log(User.prototype);
// // user1.sayHi();  


// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`); 
//     }
// };

// console.log(user.firstName);

// user.sayHi(); //works 
// setTimeout(user.sayHi, 0); //problem!

// const obj = {
//     x: 81,
//     getX () {
//       return this.x;
//     }
//   };
//   console.log(obj.getX());
  //setTimeout(obj.getX, 100);
//   let r = obj.getX();
  
//   alert(obj.getX.bind(obj)())
//   alert(obj.getX());
//   alert(obj.getX.call(obj));
//   alert(obj.getX.apply(obj));
// console.log(obj.getX());
// const me = {
//     first: 'John',
//     last: 'Smith', 
//     getFullName: function() {
//         return this.first + ' ' + this.last; 
//     }
// }
// const log = function(height, weight) { // ‘this’ refers to the invoker
//     console.log(this.getFullName()+ height + ' ' + weight);
// }

// const logMe = log.bind(me);
// logMe('180cm', '70kg'); // John Smith 180cm 70kg
// log.call(me, '180cm', '70kg'); // John Smith 180cm 70kg 
// log.apply(me, ['180cm', '70kg']); // John Smith 180cm 70kg 
// log.bind(me, '180cm', '70kg')(); // John Smith 180cm 70kg

// let  animal  = {
//     eats: true
// };
// let rabbit = Object.create(animal); //(*)
// rabbit.jumps = true;
// console.log(rabbit);
// console.log(animal);
// console.log(rabbit.eats);

// let animal = {
//     walk: function() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
// } },
//     sleep: function() {
//         this.isSleeping = true;
// } };
// let rabbit = Object.create(animal);
// rabbit.name = "White Rabbit";
// // modifies 
// rabbit.isSleeping
// rabbit.sleep();
// // alert(rabbit.isSleeping); // true
// animal.sleep();
// // alert(animal.isSleeping);
// console.log(Object.keys(rabbit));
// console.log(Object.keys(animal));
// for(let item in rabbit) console.log(item);

// class Staff{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log('Hi there');
//     }
// }

// let prof = new Staff("Jill");
// prof.sayHi();
// console.log(prof);


// class User {
//     constructor(name = "Anonymous") {
//         this.name = name; }
//     sayHi() {
//         console.log(`Hello, ${this.name}!`);
// } }
// fred = new User();
// console.log(fred);
// console.log(fred.__proto__);
// console.log(User.prototype);
// fred.sayHi();
// bob = new User("Bob");
// console.log(bob);
// bob.sayHi();

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//     sayHi(){
//         console.log('Hi there!');
//     }
//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
// } }
// // usage
// let articles = [
// new Article("HTML", new Date(2019, 1, 1)),
// new Article("CSS", new Date(2019, 0, 1)),
// new Article("JavaScript", new Date(2019, 11, 1))
// ];
// // articles.sort(Article.compare);
// // alert(articles[2].title);
// console.log(Article.compare(articles[2], articles[2]));
// let art = new Article("HTML", new Date(2019, 1, 1));

// art.sayHi();

// const x = 10;
// function b(){
//     let x = 1;

//     function a(x){
//         let y = 3;
//         x = 20;
//     }
//     return a;
// }

// let a = function(x){
//     console.log(x);
// }

// const g = b(1);
// console.log(g(1));
// console.log(g(2));

// let linkedList = {};
// linkedList.add = function(element){
//     if(this.value === undefined){
//         this.value = element;
//         this.next = null;
//     }else{
//         let current = this;
//         while(current.next){
//             current = current.next;
//         }
//         current.next = {value: element, next: null};
//     }
// }

// function greet(greeting){
//     console.log(`${greeting} Eria!`);
// }
// //failure to supply a variable
// greet();

// window.x = 10;
x = 10;
console.log(x);
console.log(window);
console.log(document);

