//  dom : document object model


// fetch the button by its id
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    const p = document.createElement("p");
    p.innerText= "This is a paragraph";

    // fetch div element
    const div = document.querySelector("div");
    console.dir(document);

    // append paragraph to the div element
    div.innerHTML += "<p>New paragraph</p>";
})





