// async function newFun(){
//     // return the number 9 
//     // (async automatically wraps this in a resolved Promise)
//     return 9;
// }

// // Call the async function (it returns a Promise)
// newFun()
// .then((val) => console.log(val)); 
// // .then() to handle the resolved value of the Promise
// // print the resolved value -> 9 to the console

async function newFun(){
    throw new Error("Wrong url")
}

newFun().then((val) => console.log(val))
.catch((err) => console.log(err));

