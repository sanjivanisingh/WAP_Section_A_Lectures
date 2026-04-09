import Header from "./components/Header"
import Footer from "./components/Footer"


function App_30March(){
    // const name = "Chirag"
    function showContent(){
        console.log("Button clicked")
    }
    return (
        <div>
            <Header name="Chirag" age={6} section="A" />
            <button onClick={showContent}>Click me</button>
            <Footer year={2026}/>
        </div>
    )
}

export default App_30March;