const myName = 'Anton';
const age = 28;
const myString = `my age is ${age}`;
let newAge = parseInt('10');
let isActive = true;
let isStarted = true;
var myArray = [
    10,
    20,
    'string',
    true
];
var myNewArray = myArray.slice(0, 3);
var myNewNewArray = myArray.concat(myNewArray);
var myObj = {
    name: 'Anton',
    age: 28
};
var persons = [];
persons.push(myObj);

var fn = function addTen(age) {
    return age + 10;
}

function foo(a, b, c, fn) {
    //do something
    fn(a);
}

foo(10, 20, 30, fn);

var result = addTen(10);
console.log(result);
//20

if(isActive){
    //do something
} else if (isActive === true && isStarted) {
    //do something else
}

for(var i = 0; i<10; i++){
    //do something
}

while(isActive === true){
    //do something
}

switch (myVariable) {
    case 10:
        //do this
        break;
    case 20:
        //do that
        break
    default:
        //if nothing matched, do this
}

const a = new Promise(function(resolve, reject) {
    //do a request to the network
    resolve(result);

    //if there's an error
    reject('reason of the error');
});

a
.then(function(result) {
    //do something with result
})
.catch(function(error) {
    //handle error here
});