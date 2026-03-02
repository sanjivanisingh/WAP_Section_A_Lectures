let isUserLoggedIn

// if user is loggedIn
// -> please log in
// if user is not loggedIn
// sign up / register  / get started // continue with google
// 
if (isUserLoggedIn){
    console.log("welcome");
    
} else {
    console.log( "please log in");
    
}

// operator :comparision:
// >, <, >=, <=, ==, ===, !=, !
// and : &&, 
// //or : ||(pipe symbol)
// 
// console.log(8<=9 || 1<= 0);
// truthy: 1, [], {}
// falsy: 0, "", null, undefined
// 1
if(undefined){
    console.log("yes truthy"); 
} else {
    console.log("no");
}

let x = 11;

switch(14){
    case 1: console.log("hello");
    break;
    case 7: console.log("hi");
    break;
    case 8: console.log("bye");
    break;
    default : console.log("yellooww");
}

// 
let y = 1;
while(y <= 6){ // 2 <= 6
    if(y == 2){
        console.log("i am intelligent");
        continue;
    } else {
        console.log("i dont know anything");
    }
    y++; // 2
}


