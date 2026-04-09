function Button({isDark, updateCount, changeMode}){
    return (
        <div>
            <button style={{backgroundColor : isDark ? "white" : "black"}} onClick={changeMode}>Increase</button>
        </div>
    )
}
export default Button;