// times("Hello", 3);

// function times(word, num2){
//     console.log(`I want to print ${word} ${num2} times`);
//     print(word, num2);
// }

// function print(word, num2){
//     for(let i = 0; i < num2; i++){
//         console.log(word);
//     }
// }


// function greet(){
//     let name = "Chhavi";
//     console.log(name);
// }


// multiply
// double
// num = 8
// 8*2 = 16
// higher order function
function multiply(num){
    return double(num);
}

function double(num){
    return num*2;
}
console.log(multiply(8));

// higher order function
// resuability
// code factorry

function multiply(num){ // num = 2 // closes
    return function(num2){
        return num * num2;
    }
}
// lexical scoping
// closure
const res = multiply(2);
res = function(num2){
    return num * num2;
}

const res1 = multiply(3);
res(9) // 
// closure
