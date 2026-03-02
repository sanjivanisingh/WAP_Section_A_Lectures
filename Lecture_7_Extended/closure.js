// var a = 10;
// function hey(){
//     console.log(a);
    
// }
// private variable
function counter(){
    let count = 0; // count = 1
    return function(){
        count++; // 1
        console.log(count)
    }
}

const count = counter();
count(); // 1
count();
count();



// 1
// 2
// 3
// 4
// 5
