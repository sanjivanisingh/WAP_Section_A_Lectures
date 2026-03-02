// promises:
// pending
// fullfilled
// reject 
// promise: is an object that represents failure/completion

// function returnRupees(val){
//     setTimeout(() =>{
//         return val;
//     }, 3000)
//     // return undefined;
// };

// const rs = returnRupees(500); // 500
// console.log(rs);
// 

const res = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const no = Math.random() * 5 + 1 ;
        console.log(no);
        
        if(no < 3){
            resolve("class tomorrow"); 
        } else {
            reject("no class tomorrow")
        }
    }, 2000);
})

res
.then((val) => console.log(val))
.catch((err) => console.log(err))



