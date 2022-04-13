import React, { useEffect, useState } from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

function DoctersProfile() {

    const[docters,setdocters]=useState([])
useEffect(()=>{
    fetch("http://localhost:8000/docter/list")
    .then(res=>res.json())
    .then((result)=>{setdocters(result);
    })
},[])
  return (
    <div>
    <Navbar />
    <form>
 
 <table className="table table-striped">
         <thead>
         <tr>
                      
                  <th> Doctor Name </th>
                  <th>City </th>
                  <th>Phone </th>
                  <th>Email </th>
                  <th>Specialization </th>
                  <th>Experiance </th>
                  {/* <th>username </th>
                  <th>Password </th> */}
                  <th> Actions </th>
                
         </tr>

         </thead>
         <tbody>
                {   
                   docters.map(
                    user=>
                    <tr key={user.id}>
                      <td>{user.dname}</td>
                      <td>{user.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.mail}</td>
                      <td>{user.specialization}</td>
                      <td>{user.experiance}</td>
                      {/* <td>{user.username}</td>
                      <td>{user.password}</td> */}
                      <td>
                           <button className="btn btn-danger" >Delete</button> &nbsp; &nbsp; 
                           <button className="btn btn-success" >Update</button>
                      </td>
                    </tr>
                  )
                     
                }
         </tbody>
 </table>
 


</form>

    <Footer/>
  </div>
  )
}

export default DoctersProfile