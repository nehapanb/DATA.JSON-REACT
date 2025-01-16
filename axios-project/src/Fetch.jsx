import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let[data,setData] = useState([])
  let[frmvisible,setfrmvisible]=useState(false)
  let[editdata,setEditdata]= useState({})
  let[frmimp,setInp]=useState({
    name : "",
    age : "",
    contact : "",
    city : ""
  })
}

function hinput(e){
  let {name,value}=e.target
  setEditdata({...editdata,[name]:value})
}
 function submitform(e){
e.preventDefault()
axios.post("http://localhost:3000/student"  ,form)
.then(res=>alert("inserted"))
  }

  function myDel(id) {
    axios.delete(`http://localhost:3000/student/${id}`)
      .then(res => alert("deleted"));
  }
  useEffect(() => {
    axios.get("http://localhost:3000/student")
    .then((res) => {
     setData(res.data);
     console.log(res.data);
    })
  }, [myDel]);
 
  return (
    <>
      <table border="">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Contact</th>
          <th>city</th>
          <th>delete</th>
        
        </thead>
        <tbody>
          {jsonData.map((e , index) => {
            return(
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.contact}</td>
                <td>{e.address}</td>
                <td>
                  <button onClick={() => myDel(e.id)}>Delete</button>
                </td>

                <td>
                  <button onClick={()=>{setfrmvisible(true),setEditdata(e)}}>Edit</button>
                </td>
              </tr>
            ) 
          })}
        </tbody>
      </table>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={form.name} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name="age" value={form.age} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name="contact" value={form.contact} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Address</label>
        <input type="text" name="address" value={form.address} onChange={changeHandler} /> <br /><br />
        <input type="submit" onClick={()=>insert()} />
      </form>

      {frmvisible && (
      <form onSubmit={submitHandler}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={form.name} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name="age" value={form.age} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name="contact" value={form.contact} onChange={changeHandler} /> <br /><br />
        <label htmlFor="">Address</label>
        <input type="text" name="address" value={form.address} onChange={changeHandler} /> <br /><br />
        <input type="submit" onClick={()=>insert()} />
      </form>)}
    </>
  );


export default Fetch;