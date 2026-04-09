// https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

import logo from "../logo.avif";

function Header({name, age, section}){
//    const {name, age} = props;
    return (
        <div>
            <div>
                <img src={logo} width="100px" />
            </div>
            <div>
                Welcome {name}
            </div>
            
        </div>
    )
}

export default Header;

