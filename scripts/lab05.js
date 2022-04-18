// /*

// */

// //Question.1.
// let numArray = [12, 4, 34, 23, 7, 18, 20, 48, 16, 52];

// function sum(arr){
//     return arr
//             .filter(item => item > 20)
//             .reduce((previousValue, currentValue) => previousValue + currentValue);
// }
// console.log(sum(numArray));

// //Question.2.

// let stringArray = ['Nahom', 'Inaam', 'Maharishi', 'Eria', 'Anna'];

// let getNewArray = function(oldArray){
//     let newArray = oldArray
//                         .filter(item => item.length >= 5)
//                         .map(item => {
//                             for(let i = 0; i < item.length; i++){
//                                 if(item.charAt(i) === 'a'){
//                                     return item;
//                                 }
//                             }
//                         });
//     return newArray;
// }

// console.log(getNewArray(stringArray));

// let promise = new Promise((resolve, reject) => {
//     const random = Math.random();
//     console.log('Random: ', random);
//     if(random > 0.5){
//         resolve('Done!')
//     }else{
//         reject(new Error('Whoops!'));
//     }
// });

// promise
//     .then(val => console.log(val))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Promise ready!'));


// async function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }
// async function run() {
//     try {
//         await thisThrows();
//     } catch (e) {
//         console.log('Caught the error....');
//         console.error(e);
//     } finally {
//         console.log('We do cleanup here'); }
//     } 
// run();

async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
    }
thisThrows()
    .catch(console.error)
    .finally(() => console.log('We do cleanup here'));