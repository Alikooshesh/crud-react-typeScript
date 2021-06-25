import React from "react";
import {ItableData} from "../../interface";

const Table:React.FC<ItableData> = (props)=> {
    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((item , index) => {
                    return(
                        <tr key={item.id}>
                            <th scope="row">{index}</th>
                            <td>{item.Fname}</td>
                            <td>{item.Lname}</td>
                            <td>
                                <button type="button" className="btn btn-warning mr-2" onClick={()=> props.edit(item.id)}>Edit</button>
                                <button type="button" className="btn btn-danger" onClick={()=> props.delete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default Table