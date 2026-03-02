// const student1 = {
//     name : "R",
//     age: 10,
//     section : "A"
// }
// const student2 = {
//     name : "R",
//     age: 10,
//     section : "A"
// }
// const student3 = {
//     name : "R",
//     age: 10,
//     section : "A"
// }
// const student4 = {
//     name : "R",
//     age: 10,
//     section : "A"
// }
const scores = [90,10,50,40];
const [a,b,c,d] = scores;
console.log(a,b,c,d);
// const a = 70;




for(let i of scores) {
    console.log(i);
}

const students = [
    {
        name : "S",
        age: 10,
        section : "A",
        score : 20
    },
    {
        name : "A",
        age: 10,
        section : "A",
        score: 70,
    },
    {
        name : "R",
        age: 10,
        section : "A",
        score: 50
    },
    {
        name : "J",
        age: 10,
        section : "A",
        score: 100
    },
    {
        name : "P",
        age: 10,
        section : "A",
        score: 40
    }
]
let sum = 0;
for(let student of  students){
    sum += student.score;
}
console.log("scores: " + sum);


console.log(students[0].name);
console.log(students[0]["name"]);

// print the count: 

let count = 0;
for (let student of students){
    if(student.score > 40 ){
        count++;
    }
}
console.log("scores > 40: "+ count);

const book1 = {
    titleOfTheBook : "HP",
    authorName: "J.K",
    price: 150
}

console.log(book1.title);
console.log(book1.authorName);
console.log(book1.price);

// destructuring
// const {titleOfTheBook: title, price} = book1;
// // console.log(title, price);
// console.log(title);
// console.log(titleOfTheBook);

const subject1 = {
    subjectName: "WAP",
    timing: "9:00 am",
    duration: 1.30
}
console.log(Object.values(subject1)); // ["wap", "9:00"]
console.log(Object.keys(subject1)); // ["subject", "timing", "duration"]
const {subjectName: name} = subject1;
console.log(name); // WAP

const names = ["Yash", "Utkarsh", "Gagandeep"];
names.push("Arpan")
console.log(names);

const newNames = [...names, "Anurag"];

const address = {
    name: "Anurag",
    address1 : {
        city: "Mumbai" ,
        area: "Thane",
        pincode : {
            pin: 201112
        }
    }
}
console.log(address.address1.pincode.pin);
const add = {...address};
console.log(add);

const colors = ["purple", "indigo", "green", "black"];
const [col, ...rem] = colors;
console.log(col, rem);

function getScores(...nums){
    console.log(a);
    
}
getScores(1,2,3,4,5); // individual -> array : rest
// [1,8,7,5] = > 1,8,7,5 // array to inidividual 


const aa = {};
const bb = {size: 20};
const cc = {s : 40};

aa[bb] = 123;
console.log(aa[bb]);

let a1 = 9;
console.log(1 < a1 > 8);














