import React, {ReactNode}from "react";
import '../styles/ParentCont.css'; 
import '../styles/backgroundCont.css';

type ChildrenProps = {
    children: ReactNode; 
}
const ParentContainer = (props:{image: string, children: React.ReactNode})=>{
    return(
        <div style={{backgroundImage: `url(${props.image})`}} className='backgroundContainer'>

        <div className='ParentContainer'>
            {props.children}
        </div>
        </div>
    )
}

export {ParentContainer}