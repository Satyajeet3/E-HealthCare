import React, { useEffect, useState } from "react";
/*import "../css/profile.css";*/
import Navbar from "../components/Navbar"
import Footer from "./Footer";

function Profile() {

  const[patients,setpatients]=useState([])
  useEffect(()=>{
      fetch("http://localhost:8000/patient/list")
      .then(res=>res.json())
      .then((result)=>{setpatients(result);
      })
  },[])
  return (
    <div>
      

      <form>
   
   <table className="table table-striped">
           <thead>
           <tr>
                        
                    <th> Patient Name </th>
                    <th>City </th>
                    <th>Phone </th>
                    <th>Email </th>
                    <th>Age </th>
                    <th>Address </th>
                    <th>username </th>
                    <th>Password </th>
                    <th> Actions </th>
                  
                </tr>
                 
            
           </thead>
           <tbody>
                  {   
                     patients.map(
                      user=>
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.mail}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
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

      <Footer />
    </div>
  );
}

export default Profile;
