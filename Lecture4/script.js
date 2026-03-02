const  comments = ["hello", "hi", "hola"];
// const com = comments ;
// com[0] = "great";
// console.log(com); // ["great", "hi", "hola"]
// comments - > 
console.log(comments.length)
console.log(comments.push("good morning pineapple"));
console.log(comments);

console.log(comments.pop());
console.log(comments);

comments.unshift("class");
console.log(comments)

comments.shift();
console.log(comments);
// splice

const actors = ["Kartik Aryan", "Hritik Roshan", "Yash Dangachecha", "Svarnim"];
actors.splice(3, 0, "Nana Patekar")
// first arg : index
// second arg : no. of elements to be removed
// third arg: elements you want to add
console.log(actors);

function printWordLengths(words) {
    for(let fr of words) {
        console.log(`${fr}: ${fr.length}`);
    }
}


printWordLengths(["apple", "banana", "kiwi", "mango"]);
const fruits = ["apple", "banana", "mango", "kiwi"];

console.log(fruits.includes("apple"));
console.log(fruits.sort());



