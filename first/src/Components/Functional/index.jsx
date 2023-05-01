import React, { useEffect, useState } from "react";

export const Functional = (props)=>{
    const [flag,setFlag] = useState(14)

    useEffect(()=>{
        console.log("Update")

        return ()=>{
            console.log("Unmount");
        }
    },[flag])
    // const click = ()=>{
    //     setFlag(28)
    // }

    return <div>
        <button onClick={()=>setFlag(flag+5)}>Click</button>
        <p>{flag}</p>
        <p>{props.title}</p>
    </div>
}