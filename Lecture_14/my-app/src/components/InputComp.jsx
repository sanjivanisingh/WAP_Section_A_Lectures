import { useState } from "react"
function InputComp(){
    // const [inputVal, setInput] = useState("")
    // const [isEmpty , setIsEmpty] = useState(true)

    const [formData, setFormData] = useState({
        usrename: "",
        password : ""
    })


    function handleInput(e){
        console.log(e);
        // setFormData({...formData, [name] : e.target,value})
        console.log({...formData, [name] : e.target.value})

        // console.log(e.target.value) //
        // setInput(e.target.value); // state changes, component re renders inputVal = "Ma"
        // if(e.target.value.length > 0) setIsEmpty(false);
        // // inputVal = "Maanya"
        // // if(e.target.value.length === 0) setName("")
        // // else if(e.target.value.length <= 8) setName("Insufficient char")
    }

    return(
        <div>
            <input 
                type="text" 
                onChange={handleInput}
                placeholder="Enter Name"
                value={formData.name}
                name="username"
            />
            <input 
                type="text" 
                onChange={handleInput}
                placeholder="Enter Password"
                value={formData.password}
                name="password"
            />
            
            {/* <p>{isEmpty ? "" : (inputVal.length < 8 ? "Password short" : "Valid Password")}</p> */}
        </div>
    )
}

export default InputComp;
