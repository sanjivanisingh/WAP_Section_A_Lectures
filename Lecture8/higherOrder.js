// function namesAfterJ(name){
//     if(name[0] > 'J'){
//         return true;
//     }
//     return false;
// }

// function greaterThan50(num){
//     if(num > 50) return true;
//     return false
// }
// const res = greaterthan50(90)

// function check(arr, func){
//     const newArr = [];

//     for(let i of arr){
//         if(func(i)) newArr.push(i);
//     }

//     return newArr
// }

// const newScores = check(scores, greaterThan50);

// forEach

const numbers = [9, 10, 78, 99, 103];
const res = numbers.map(function(num, idx){
    return undefined
})

numbers
console.log(res);


// console.log(numbers.length);

// numbers.forEach(getNums);

// function getNums(ele){
//     console.log(ele);
// }
let sum = 0;
numbers.forEach(function(num,idx){
    if(num == 99) {
        console.log(idx)
    }
})
// console.log(sum);
// AMAAN
// 99


// forEach takes callback function as it's parameter.
// the callback in turn get the elelement of the array

const numbers1 = [1, 2, 3, 4, 5]
const numbersSquare = numbers1.map((num) => num * num)
console.log(numbersSquare);

const countries = [ "the United States", "The Netherlands", "Canada","the United Kingdom","Germany" ];
const newC= countries.map(function(country){
    if(country.slice(0, 4) === "the "){
        return country.slice(4);
    }
    return country;
})

console.log(newC);
