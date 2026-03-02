// function calcSomething(a, word, num, greet){ // parameter
//     return a; // 6
//     greet(); // hello
// }

// function greet(){
//     console.log("helloo");
// }

// let num = 30
// calcSomething(6, "hello", num, greet); // argument

// console.log(10);
// console.log(20);

// function fun1(fun2){
//     console.log("Statement 1");
//     fun2();
// }
// function fun2(){
//     console.log("Statement 2");
// }
// // fun2();
// fun1(fun2);

function add(a,b){
    console.log(a+b)
}
function subtract(a,b){
    console.log(a-b);
    
}
function multiply(a,b){
    console.log(a*b); 
}

// function calculator(a,b, ){
//     // koiBhiActionPerformKro(a,b);
//     return function(){
//         console.log("helllo");
        
//     }
// }
// calculator(4, 2,add);
// calculator(4, 2,subtract);
// calculator(4, 2,multiply);

const names = ["Prachi", "Ramni", "Ayan", "Aryaman", "Muskan"];
const scores = [80, 40, 10, 20, 90];

// ["prachi", "Ramni", "Muskan"];
// function namesAfterJ(arr){
//     const newArr = [];
//     for(let ele of arr) {
//         if(ele[0] > 'J') {
//             newArr.push(ele)
//         }
//     }
//     console.log(newArr)
// };

function fun(arr,check ){
    const newArr = [];
    for(let ele of arr) {
        if(check(ele)) {
            newArr.push(ele)
        }
    }
    console.log(newArr)
};
fun(names, checkGreaterJ);

function checkGreater50(num){
    if(num > 50){
        return true
    }
    return false
}
function checkGreaterJ(name){
    if(name[0] > 'J'){
        return true;
    }
    return false;
}


// filter function
// filter(fun, i, ele) // return new array

const add1 = (a, b=10) => a + b;
console.log(add1(5, 9));

addEventListener("click", function() {
    console.log("click");
    
})

function addEventListener(name, fun) {
    fun();
}
// hirding the implmentation
// kya krna hai????
// 4th Feb : post class quiz ----> 
// check with the team

// washing machine analogy

