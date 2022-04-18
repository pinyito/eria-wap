//Using modules
// const fs = require('fs');

// fs.readFile('user-data.txt', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(data.toString());
//     }
// });

// fs.writeFile('user-data.txt', 'username = Eria', err => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Wrote to file!');
//     }
// });

// setTimeout(function(){console.log('world')},2000);
// console.log('Hello');
/**A function expression to say hello */
//USING MODULES
//Pattern.1
module.exports = function(){
    console.log('Hi there!');
}
//Pattern.2
module.exports.greet = function(){
    console.log('Hi there!');
}

exports.greet = function(){
    console.log('Hello there!');
}