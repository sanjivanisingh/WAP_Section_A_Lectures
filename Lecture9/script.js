// // console.log(2) // 1 is [printed] 

// // setTimeout(function(){
// //     console.log("Partyyyyyyyyyy");
// // }, 5000);

// // setTimeout(function(){
// //     console.log("Rest");
// // }, 9000)

// // console.log(9); // thread of execution
// // console.log("Hiii"); // thread of execution
// // console.log("Byeeeee Partyy abhi baaki hai "); // thread of execution
// // // 2 // 9 / 


// // setTimeout(function(){
// //     console.log("I am happy");
// // }, 0);
// // console.log("Class over");

// console.log("8");

// setTimeout(()=>{
//     console.log("90");
//     console.log("91");
// }, 0)

// console.log("70");
// // muskan
// // lalit

console.log("A");
setTimeout(()=>{
    console.log("B")
    setTimeout(()=>{
        console.log("C")
    },0)
    console.log("D")
    
},0)
setTimeout(()=>{
    console.log('E');
},0)
console.log("F");
// let count = 0;
// const id = setInterval(() => {
//     console.log("Parv has gossipsssss");
//     count++;
//     if(count == 5){
//         clearInterval(id);
//     }
// }, 5000)

//  setInterval(() => {
//     console.log("Parv has gossipsssss");
//     count++;
//     if(count == 5){
//         clearInterval(id);
//     }
// }, 5000)
// console.log(id);




