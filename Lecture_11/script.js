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



