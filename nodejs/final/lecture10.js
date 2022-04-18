// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(()=> console.log('nexttick'));

// const greeting = require('./app1');//an ovject is returned = > module.exports
// // console.log(typeof greeting);
// // console.log(typeof exports);
// greeting();

// greeting.greet();

// const personObj = require('./app1');
// personObj.getName();
// personObj.name = "Peter Brandson";
// personObj.getName();
// const cached = require('./app1');

//Node Core libraries
//The util module
// const util = require('util');
// let name = 'Eria Othieno Pinyi';
// const sayHi = util.format('Hi %s', name);
// console.log(sayHi);

//The path module
// const path = require('path');
// const { start } = require('repl');
//return the directory part of a path - use the dirname method from path module
// console.log(path.dirname('buffer'));
// console.log(path.dirname('final/start.js'));

//Jooin 2 or more parts of the path - use join method from the path module
// const name = 'eria';
//takes multiple string arguments
// console.log(path.join('view', name, 'test.txt'));
// console.log(__dirname);

//The fs module - provides functionality to access and interact with the file system
const fs = require('fs');
const path = require('path');

// const message = fs.readFileSync(path.join(__dirname, 'hello.txt'), 'utf8');//Synchronous file reading
// console.log(message);

//Any Asynchronous function accepts a callback function as the last parameter and
//the function accepts error as the first parameter, null will be passed if there is no error
// fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('***Asynchronous Read***');
//     console.log(data);
//     console.log(err);//null will be passed if there is no eror
// });

//More examples of reading and writing into files
//Reading from a file
fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, (err, data) => {
    //encoding can be presented as an object literal or utf8 or utf-8
    console.log(data);
});

//Writing to a file - provide the file, data, and the callback function
fs.writeFile(path.join(__dirname, 'hello.txt'), 'I am writing into file', (err) => {
    if(err) throw err;
    console.log('Writinf complete!!!');
});


//The stream module - provides a foundation upon which streaming APIs are built
//All streams are instances of EventEmitter

