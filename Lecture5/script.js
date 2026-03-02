// const temp = [20, 25, 25];

const temp = {
    minTemp : 20,
    avgTemp : 25,
    maxTemp : 26
}


// const mayank = {
//     "height" : "3feet8inch",
//     "weight" : 175,
//     100 : 0,
//     hobby : ["playing badminton", "playing chess", "video recording", "crying"],
//     makingVideos: () => console.log("syntax"),
    
// }

// console.log(mayank.iq);
// console.log(mayank["weight"]);

// mayank.makingVideos();
// console.log(mayank["makingVideos"]()); // is it a function call?????
// mayank["makingVideos"]()
// console.log(mayank["makingVideos"]());



// const makingNoise = function(){
//     console.log("Making noise");
// }
// function makingNoise(){
//     console.log("Making noise");

// }
// makingNoise();


const student = {
    name: "Varun",
    age: 8,
    section: "A",
    // address : {
    //     // city: "ghazia"
    // },
    studying : () => "Student is studying"
}

console.log(student.address.city);

delete student.section;

console.log(student);

student.favColor = "yellow";
console.log(student);





