import React, {useState} from 'react';
import './App.css';
import Input from "./components/input/input";
import {Ihuman, IinputData} from "./interface";
import Table from "./components/table/table";


function App() {
    const [value , setValue] = useState<IinputData>({Fname : "" , Lname : ""})
    const [data , setData] = useState<Ihuman[]>([])

    function addMember(){
        if (value.Fname != "" && value.Lname != ""){
            setData([...data , {...value , id:Date.now()}])
            setValue({Fname : "" , Lname : ""})
        }
    }

    function delData(id:number) {
        setData([...data.filter(item => item.id != id)])
        return "Deleted"
    }

    async function editData(id:number) {
        const newFname:string|null = prompt("First Name : ")
        const newLname:string|null = prompt("Last Name : ")
        if (newFname && newLname ){
            const tempData:Ihuman[] = [...data]
            const finder:number = tempData.findIndex(item => item.id == id)
            tempData[finder].Fname = newFname
            tempData[finder].Lname = newLname
            setData([...tempData])


        }else{
            editData(id)
        }
    }

  return (
      <>
          {console.log(data)}
          <Input name={"Fname"} label={"First Name"} fullValue={value} setValue={setValue} value={value.Fname}/>
          <Input name={"Lname"} label={"Last Name"} fullValue={value} setValue={setValue} value={value.Lname}/>
          <button onClick={addMember}>Add</button>
          <br/>
          <Table data={data} delete={delData} edit={editData}></Table>
      </>
  );
}

export default App;
