const start = Date.now();
setTimeout(() => {
    const end1 = Date.now();
    console.log("Timeout ran after", end1 - start, "ms");
}, 3000); // supposed to run after 1 second

setTimeout(() => {
    const end2 = Date.now();
    console.log("Timeout ran after", end2 - start, "ms");
}, 6000); // supposed to run after 1 second

// setTimeout(()=>{
//     console.log('E');
// },0.2);
// setTimeout(()=>{
//     console.log('A');
// },0.1);






