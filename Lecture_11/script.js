const obj = {
    name : "",
    age: 60
}

console.log(obj);

const jsonObj= JSON.stringify(obj);
console.log(jsonObj[0]); // { 

// error

// amazon/create
// 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

// promise

// fetch
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
const url1 = "https://dummyjson.com/products/2";
// fetch return the promise
fetch(url1)
.then((res) => {
    console.log(res);
    return res.json() // promise bodyyyyyyyyyyy data [parsee]
})
.then(data => console.log(data.id))
.catch((err) => console.log(err)
)

// 010100101001001001001010010100100100101001001001010001 time : 
//  -> PBJECT
// streaming : 1GB
// 20GB
// .JSON() -> CHUNKS -> JSON STRING -> JSON.PARSE() -> OBJ
// STREAM : 500MB



