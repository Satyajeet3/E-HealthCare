import React, { useState } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
function PersonelDocter() {

    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[user,setuser]=useState();

    // const[dname,setdname]=useState("");
    // const[city,setcity]=useState("");
    // const[phone,setphone]=useState("");
    // const[mail,setmail]=useState("");
    // const[specialization,setspecialization]=useState("");
    // const[experiance,setexperiance]=useState("");


    function deleteuser(id)
{
  alert(id)
  fetch(`http://localhost:8000/docter/delete/${id}`,{
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
    const docter={username,password}
    console.log(docter)
  
    fetch("http://localhost:8000/login/docter",
    {method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(docter)
    }).then((result)=>result.json()).then((car)=>setuser(car))
    }

    function updateuser(id)
    {
        console(id)
    }

  return (
    <div>     
    
                <Navbar/>
                

    <div>   
    {/* <div class="bgimg"> */}
          <div class="container text-center text-black headerset">         
    
                 <h2>DOCTOR PROFILE</h2>
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
    <a href="/register">
    <button className='btn btn-success' type='button'  >Doctor Register</button></a>

 <br></br>
 <br></br>
 <br></br>
 


   
   <table className="table table-striped text-black">

           <thead>
               <tr>
              
                   <th> Doctor Name </th>
                   <th> City </th>
                   <th>Phone </th>
                   <th>Mail </th>
                   <th> Specialization </th>
                   <th> Experiance </th>
               </tr>
           </thead>
           <tbody >
                  {   
              user&& <tr>
                         <td>{user.dname}</td>
                         <td>{user.city}</td>
                         <td>{user.phone}</td>
                         <td>{user.mail}</td>
                         <td>{user.specialization}</td>
                         <td>{user.experiance}</td>
                         <td> <button className='btn btn-danger' type='button' onClick={()=>deleteuser(user.id)} >delete</button></td>
                   
                  
                       </tr>
                     
                       
                  }
           </tbody>
   </table>
   </form>
   </div>
   {/* </div> */}
   </div>
 {/* <Footer/> */}
</div>
  )
}

export default PersonelDocter;