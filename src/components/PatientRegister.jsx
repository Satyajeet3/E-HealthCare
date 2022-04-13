import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function PatientRegister() {
    useEffect(() => {
        document.title = "Register";
      }, []);
    
       const[name, setname] = useState();
       const[city, setcity] = useState();
       const[phone, setuphone] = useState();
       const[mail, setumail] = useState();
       const[age, setage] = useState();
       const[address, setaddress] = useState();
       const[username, setusername] = useState();
       const[password, setpassword] = useState();
        const[tnc]=useState();
      
    
      function clearFields() {
    
        setname("");
        setcity("");
        setuphone("");
        setumail("");
        setage("");
        setaddress("");
        setusername("")
        setpassword("")
        document.getElementById("tnc").checked = false;
      }
    
      const handleClick=(e)=>
      {
      e.preventDefault()
      const docter={city,name,phone,mail,age,address,username,password}
    
      fetch("http://localhost:8000/patient/save",
      {method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(docter)}).then(()=>{console.log("new patient added")})
    
      clearFields();
      alert("data saved successfully");
      }
      
     
    
      return (
        <div>     <Navbar/>
        <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, red ,pink)",
      }}
        
           className="vh-100 d-flex reg">
            <div className="m-auto w-50 pt-5   align-self-center text-black reg-form">
              <h3 className="text-center fw-bold mb-3" style={{ color: "black"}}>
              PATIENT REGISTER
              </h3>
      
    
              <form className="row g-1 mt-2">
                        <div className="col-md-6">
                          <label for="name" className="form-label fs-5">
                            Name
                          </label>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          id="name"
                                                          name="name"
                                                          placeholder="Full name"
                                                          value={name} onChange={(e)=>setname(e.target.value)}
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

                   
                    value={age} onChange={(e)=>setage(e.target.value)}
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
                    placeholder= "House No-10, Lane No-6 and PinCode-110059"
                    value={address} onChange={(e)=>setaddress(e.target.value)}
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
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password} onChange={(e)=>setpassword(e.target.value)}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{password}</div>
            </div> 

                <div className="col-md-7 text-right mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="tnc"
                    name="tnc"
                    required
                  />
                  <label for="tnc" className="form-label fs-5">
                    Accept terms and conditions
                  </label>
                  <div class="invalid-feedback fs-6 fw-bold">{tnc}</div>
                </div>
                <div className="col-md-5 text-left mt-3">
                  <Link
                    to="/termsandconditions"
                    href="#"
                    className="text-decoration-none fs-5"
                    id="tnc"
                  >
                    Terms and Conditions
                  </Link>
                </div>
                <div className="col-md-12 text-center">
                  <h4 className="fs-4">
                    Already Registered?
                    <Link to="/" href="login.html" className="text-decoration-none">
                      Home
                    </Link>
                  </h4>
                </div>
    
                <div className="col-md-12 text-center">
    
    
                                                                                                              {/* SUMBIT BUTTON */}
                  <button type="submit" class="btn btn-primary " onClick={handleClick}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

export default PatientRegister