import React, {useEffect, useState} from "react";

import {Iinput, IinputData} from "../../interface";

const Input:React.FC <Iinput> = (props)=> {
    // const [currentVal , setCurrentVal] = useState<string>("")
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        // setCurrentVal(e.target.value)
        props.setValue({...props.value , [e.target.name] : e.target.value})
    }

    return (
        <>
            <label htmlFor={props.id?props.id:props.name}>{props.label} </label>
            <input name={props.name} id={props.id?props.id:props.name} onChange={handleChange}/>
            <br/>
        </>
    )
}

export default Input