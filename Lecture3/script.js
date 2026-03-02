// function definition

function calculateArea(length, width){
    let area = length * width;
    return area;
}
let res = calculateArea(7, 20);
console.log(res);

calculateArea(4, 8);

// function expression
const maryada = function(){
    console.log("Watching moviesss");
}
maryada();

// Bahubali
// console.log("Kattappa killed Bahubali");

// will have two parameters
// "Rajmata," 7 
// times, whoOrdered 
// Kattappa killed Bahubali 7 times
const killcount =function(times,whoordered){
    console.log(`${whoordered} ordered kattappa to kill bhaubali ${times} times`)
}
killcount(6,"rajmata");

// 1.
function hello(){
    console.log(hello + "Yash")
}

const hello1 = () => console.log(hello + "Yash");

function add(word1, word2){
    console.log(word1 + " is " + word2);
    
}
add("Swarnim", "sleeping");

const add1 = (name, acvity) => console.log(name+  " is **");
console.log(add1);
add1("Swarnim", "always sleeping");
// arrow fuction doesnt have a name
// there is no function keyword
// we dont bracket for function parameter, if there's just one variable
// we can skip {} if there is single statement

let callF = function(){
    console.log(1);
}
callF();


let money = () =>  90;


console.log(money());

function print(a,b){ // 
    console.log(a+b) // 
}

print(a = 9, 19);





