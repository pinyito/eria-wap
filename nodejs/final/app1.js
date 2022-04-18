//pattern 1.
//Since we know that require returns module.exports, we can assign the required code to module.exports and then receive in the calling module
module.exports = function(){
    console.log('Hi');
};

//Pattern 2.
module.exports.greet = function(){
    console.log('Hi in pattern 2.');
}

//pattern 3.
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}

module.exports = new Person('James Edwards');