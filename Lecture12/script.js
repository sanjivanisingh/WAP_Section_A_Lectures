// // callback
// function x(fun){
//     console.log("function 1");
// }

// function y(){
//     console.log("function 2");  
// }

// x(y)
// setTimeout
// setInterval
// filter
// map
// forEach
// addEventLISTENER
// FIND
// 
// moveBy(100, 100, ()=> {
//     moveBy(100, 2000, ()=>{
//         moveBy()
//     })
// })

// const p1 = new Promise((resolve, reject)=> {
//     // pending
//     // fullfilled
//     // rejected
//     reject("nooooooo")
// })
// // console.log(p1); // {state, result}

// p1.then((res) => console.log(res))
// .catch((err) => console.log(err));

// p1.then((res) => console.log(res));
const api = "UDcr7zFLrQ5C32ururrHdiUrDmNfZfveKV98Uk4T"
const url = `https://api.nasa.gov/planetary/apod?api_key=${api}&count=5`
// fetch(url)
// .then((res) => res.json()) // response object
// .then(data => console.log(data))
// .catch((err) => console.log(err))

// async await
// 0010101010010100101001010
// 0010
// 1010
// 10100 => json string = > json.parse(str) => object

// console.log(1);
// setTimeout(()=>{
//     console.log("hello");
    
// }, 0);
// console.log("bye");
// async function check(){
//     setTimeout(()=>{
//         const p1 = new Promise((resolve, reject)=> {
//             resolve("Section A : 95%")
//         });
//         return p1;
//     }, 2000)
// }

// async function exec(){
//     console.log("waiting for section A result");
//     const res = await check();
//     console.log(res);
//     console.log("done");
// }

// exec();

// async function getNasaData(){
//     const res = await fetch(url)
//     const data = await res.json();
//     console.log(data);
//     // data.filter((obj) => {
//     //     if(obj.date )
//     // })
//     const img = document.querySelector("img");
//     img.setAttribute("src", data.url)

// }

// getNasaData();

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("hello")
    }, 5000);
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("bye")
    }, 2000);
})

async function wait(){
    console.log("start");
    const res = await p1;
    const res1 = await p2;
    console.log(res);
    console.log(res1);
}

wait();
