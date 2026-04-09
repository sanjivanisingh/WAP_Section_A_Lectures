import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App_30March from "./App_30March.jsx"
// import App from "./App_state_management"
// import App from './App_lifting_state_up';
import App from "./App_controlled"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

)
// return a
// retun b

/*
<div>
  <h1>React lecture</h1>
  <p>Reactt is js library</p>
</div>

const div = document.createElement("div")
const h1 = document.createElement("h1")
const p = document.createElement("p")

h1.innerText= "React lecture"
p.innerHTML = "React is js library"
div.append(h1, p);



*/