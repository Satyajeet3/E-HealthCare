import React, { useState } from 'react'
import Navbar from "./Navbar";
function UpdatePatient() {

        const[user,setuser]=useState();

      

  const handleLogin=(e)=>
  {
   e.preventDefault()
  const patient={username,password}
  console.log(patient)

  fetch("http://localhost:8000/login",
  {method:"POST",
  headers:{"Content-type":"application/json"},
  body:JSON.stringify(patient)
  }).then((result)=>result.json()).then((car)=>setuser(car))

  console.log(user.name)
  setname(user.name)
  setcity(user.city)
  setage(user.age)
  setaddress(user.address)
  setuphone(user.phone)
  setumail(user.mail)
  }

  const[name, setname] = useState();
  const[city, setcity] = useState();
  const[phone, setuphone] = useState();
  const[mail, setumail] = useState();
  const[age, setage] = useState();
  const[address, setaddress] = useState();
  const[username, setusername] = useState();
  const[password, setpassword] = useState();

  const handleClick=(e)=>
  {
  e.preventDefault()
  const patient={city,name,phone,mail,age,address,username,password}

  fetch(`http://localhost:8000/patient/${user.id}`,
  {method:"PUT",
  headers:{"Content-type":"application/json"},
  body:JSON.stringify(patient)}).then(()=>{console.log("new patient added")})
  alert("profile updated successfully")
  clearFields();
  }
  function clearFields() {
    
    setname("");
    setcity("");
    setuphone("");
    setumail("");
    setage("");
    setaddress("");
    setusername("")
    setpassword("")
    
  }
      return (
        <div>   
          <Navbar/> 
          <div class="container text-center text-black headerset">
          <h2>Enter Credentials</h2>

        <form>
        <div className="form-group">
      <input type="text" className="form-control"  placeholder="Enter username" 
      value={username} onChange={(e)=>setusername(e.target.value)}  style={{width: "370px"}}/>
    </div>
  
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Enter Password" 
      value={password} onChange={(e)=>setpassword(e.target.value)}  style={{width: "370px"}}/>
    </div>

                <br></br><br></br>
  
    <button type="submit" className="btn btn-primary " onClick={handleLogin}>Submit</button>
    
 <br></br>
        </form>
          <div className="vh-100 d-flex reg">
            <div className="m-auto w-50 pt-2 ps-5 pe-5 pb-2  align-self-center text-black reg-form">
              <h3 className="text-center fw-bold mb-3" style={{ color: "#000000"}}>
                       UPDATE PROFILE 
              </h3>
              
    
              <form className="row g-3 mt-1">
                        <div className="col-md-6">
                          <label for="name" className="form-label fs-5">
                            Name
                          </label>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          id="name"
                                                          name="name"
                                                          value={name}
                                                          placeholder="Full name"
                                                          onChange={(e)=>setname(e.target.value)}
                                                          required
                                                        />
                        </div>
                <div className="col-md-6">
                  <label for="City" className="form-label fs-5">
                    City
                  </label>
                                              <select
                                                id="city"
                                                className="form-select"
                                                name="city"
                                                value={city} onChange={(e)=>setcity(e.target.value)}
                                                required
                                              >
                    <option key = 'blankChoice' hidden value>Choose City </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                  <div class="invalid-feedback fs-6 fw-bold">{city}</div>
                </div>
                <div className="col-md-6">
                  <label for="phone" className="form-label fs-5">
                    Phone Number
                  </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="phone"
                                              id="phone"
                                              placeholder="Without +91"
                                             value={phone} onChange={(e)=>setuphone(e.target.value)}
                                              required
                                            />
                  <div class="invalid-feedback fs-6 fw-bold">{phone}</div>
                </div>
                <div className="col-md-6">
                  <label for="email" className="form-label fs-5">
                    Email-ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Eg:-abc@gmail.com"
                   value={mail} onChange={(e)=>setumail(e.target.value)}
                    required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{mail}</div>
                </div>
                <div className="col-md-6">
                  <label for="AGE" className="form-label fs-5">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    value={age}  onChange={(e)=>setage(e.target.value)}
                    required
                  />
                  <div class="invalid-feedback fs-6 fw-bold">{age}</div>
                </div>
                <div className="col-md-6">
                  <label for="Address" className="form-label fs-5">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experiance"
                    name="experiance"
                   value={address} placeholder= "House No-10, Lane No-6 and PinCode-110059"
                   onChange={(e)=>setaddress(e.target.value)}
                    required
                  />
                </div>
    
                <div className="col-md-6">
              <label for="username" className="form-label fs-5">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
              value={username} onChange={(e)=>setusername(e.target.value)}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{username}</div>
            </div>

            <div className="col-md-6">
              <label for="Password" className="form-label fs-5">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                value={password} onChange={(e)=>setpassword(e.target.value)}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{password}</div>
            </div> 

               
             
               
               
            
    
                <div className="col-md-12 text-center">
    
    
                                                                                                              {/* SUMBIT BUTTON */}
                  <button type="submit" class="btn btn-primary " onClick={handleClick}>Submit</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      );
    }

export default UpdatePatient