import React from "react";
const Navbar = () => {
    let value = true;
    let nav = () =>{
        let sideNav = document.querySelector(".side-nav");
      
        if(value){
            sideNav.style.left = "0px";
            value = false;
        }
        else{
            sideNav.style.left = "640px";
            value = true;
        }
    }
    return (
        <>
        <nav>
            <div>
                <div className="title">Kawa challenge</div>
            </div>
            <div className="navs">
                <ol>
                    <li>home</li>
                    <li>download</li>
                    <li>pricing</li>
                </ol>
            </div>
            <div className="bar" onClick={()=>{nav()}}>
                <div>&#xe5d2;</div>
            </div>
        </nav>
        
        <div className="side-nav">
            <ol>
                <li onClick={()=>{nav()}}>home</li>
                <li onClick={()=>{nav()}}>download</li>
                <li onClick={()=>{nav()}}>pricing</li>
            </ol>
        </div>
        </>
    )
}

export default Navbar;