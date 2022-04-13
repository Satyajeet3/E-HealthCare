import React, { useState } from 'react'
//import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
function Personel() {

    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[user,setuser]=useState();

    function deleteuser(id)
{
  alert(id)
  fetch(`http://localhost:8000/patient/delete/${id}`,{
    method:'POST'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
    })
  })
}

    const handleClick=(e)=>
    {
     e.preventDefault()
    const patient={username,password}
    console.log(patient)
  
    fetch("http://localhost:8000/login",
    {method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(patient)
    }).then((result)=>result.json()).then((car)=>setuser(car))

}

  return (
    <div>
      <Navbar/>
      
        
    
      <div class="container text-center text-black headerset">
      <h2>PATIENT PROFILE</h2>
    <form >

    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Enter username" 
      value={username} onChange={(e)=>setusername(e.target.value)} style={{width: "370px"}}/>
    </div>
  
    <div className="form-group">
      <input type="password" className="form-control"  placeholder="Enter Password" 
      value={password} onChange={(e)=>setpassword(e.target.value)} style={{width: "370px"}}/>
    </div>

                <br></br><br></br>
  
    <button type="submit" className="btn btn-primary " onClick={handleClick}>Submit</button>
    &nbsp;&nbsp;
    <a href="/pr">
    <button className='btn btn-success' type='button'  >Patient Register</button></a>

 <br></br>
 <br></br>
 <br></br>
   
   <table className="table table-striped text-black">
           <thead>
                        
               <tr>
              
                   <th> Patient Name </th>
                   <th> City </th>
                   <th>Phone </th>
                   <th>Mail </th>
                   <th> Age </th>
                   <th> Address </th>
                   <th> Actions </th>
               </tr>
           </thead>
           <tbody>
                  {   
              user&& <tr>
                         <td>{user.name}</td>
                         <td>{user.city}</td>
                         <td>{user.phone}</td>
                         <td>{user.mail}</td>
                         <td>{user.age}</td>
                         <td>{user.address}</td>
                         <td> <button className='btn btn-danger' type='button' onClick={()=>deleteuser(user.id)} >delete</button>
                         &nbsp;&nbsp;
                         <a href="/updatePatient">
                         <button className='btn btn-success' type='button'  >update</button></a></td>
                      
                  
                       </tr>
                     
                       
                  }
           </tbody>
   </table>
   
  

 </form>
  </div>
  </div>
  
  )
}

export default Personel;