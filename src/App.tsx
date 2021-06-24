import React, {useState} from 'react';
import './App.css';
import Input from "./components/input/input";
import {IdataList, IinputData} from "./interface";


function App() {
    const [value , setValue] = useState<IinputData>({Fname : "" , Lname : ""})
    const [data , setData] = useState<IinputData[]>([])

    function addMember(){
        setData([...data , value])
        setValue({Fname : "" , Lname : ""})
    }
  return (
      <>
          {console.log(value)}
          {console.log(data)}
          <Input name={"Fname"} label={"First Name"} value={value} setValue={setValue} />
          <Input name={"Lname"} label={"Last Name"} value={value} setValue={setValue} />
          <button onClick={addMember}>Add</button>
      </>
  );
}

export default App;
