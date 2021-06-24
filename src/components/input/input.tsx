import React, {useEffect, useState} from "react";

import {Iinput, IinputData} from "../../interface";

const Input:React.FC <Iinput> = (props)=> {

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        props.setValue({...props.fullValue, [e.target.name] : e.target.value})
    }

    return (
        <>
            <label htmlFor={props.id?props.id:props.name}>{props.label} </label>
            <input name={props.name} id={props.id?props.id:props.name} onChange={handleChange} value={props.value}/>
            <br/>
        </>
    )
}

export default Input