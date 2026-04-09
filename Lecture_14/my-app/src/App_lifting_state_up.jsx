import Button from "./components/Button"
import {useState} from "react"

function App_lifting_state_up(){
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);


    function updateCount(){
        setCount(count + 1);
    }
    function changeMode(){
        setIsDark(!isDark)
        
    }
    return (
        <div>
            <p>{count}</p>
            <Button isDark={isDark} changeMode={changeMode} updateCount={updateCount}  />
            {/* <Button updateCount={updateCount} /> */}
        </div>
    )
}
export default App_lifting_state_up;