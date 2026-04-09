import {useState} from "react"

function App_state_management(){
    console.log(useState());
    const [count, setCount] = useState(1);
    // state -> lifting state up??

    let dummyCount = 0;

    function increment(){
        // count+=1
        dummyCount += 1;
        setCount((prev) => prev+1)
        // console.log(count);
    }

    return (
        <div style={{display:"flex", border:"1px solid red", justifyContent: "center", height:"100vh", alignItems:"center", gap:"10px"}}>
            <button count={count} onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick>-</button>
        </div>
    )
}

export default App_state_management;

// state management

// counter app
// requirements:
// 2 buttons : increment : counter should increase by 1
// decrement: counter should decrease by 1

