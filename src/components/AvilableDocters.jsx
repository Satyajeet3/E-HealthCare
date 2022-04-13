import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from 'axios';


function AvilableDocters() {
  const [docters, setdocters] = useState([]);
  const [option, setoption] = useState("");
  const [id, setid] = useState();
  // useEffect(() => {
  //   // console.log(option,'this is  option');
  //   // fetch(`https://localhost:8080/doctor/ORTHO`)
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //     res.json();
  //   //   })
  //   //   .then((result) => {
  //   //     setdocters(result);
  //   //   });
  //   // getDoctorsList();
  // }, []);




  const getDoctorsList = () => {
    // let url = `https://reqres.in/api/users?page=${option}`
    let url1=`http://localhost:8000/doctor/${option}`
    axios.get(url1).then((response) => {
      console.log(response);
      setdocters(response.data);
    })
    .catch((Error)=>{console.log(Error)})
  }
  //  function handleChange(event){
  //    setoption(event.target.value) 
  //    console.log(option)
  //  }
  const handleChange = (option) => {
    console.log(option);
    setoption(option);
  };

  return (
    <>
      {" "}
      <Navbar></Navbar>
      {
        
        <div
          bg-danger
          style={
            {
              /* backgroundImage:
            "linear-gradient(to right top, black,red)",*/
            }
          }
          className="m-auto w-50 pt-5   align-self-center text-black reg-form"
        >

          <div id="now" className="m-auto w-50 pt-5   align-self-center text-black reg-form">
            {/* PAGE HEADING */}
            <h4 className="text-center text-black display-7 fw-bold mt-5 mb-5 pt-7">
              {" "}
              FIND DOCTORS{" "}
            </h4>
            {/* FORM CLASESS */}
            
              {/* INPUT TEXT AREA */}
              <div className="col-md-6 mb-3">
                <h5>Doctor Type</h5>

                <select name="option" onChange={(e) => handleChange(e.target.value)}>
                  {/* <option value="">Select a Specilist </option> */}
                  <option value="ENT">ENT</option>
                  <option value="CARDIO">CARDIO</option>
                  <option value="ORTHO">ORTHO</option>
                </select>
              </div>

              {/* Button */}
              <div className="col-12 text-center mt-5 mb-1  ">
                <button onClick={getDoctorsList} class="btn btn-primary ">
                  Submit
                </button>
              </div>
          </div>
        </div>
}
      <div>
      <h3 className="text-center fw-bold mb-9 pt-5" style={{ color: "BLACK" }}>
        LIST OF DOCTORS
      </h3>
      <form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Doctor Name </th>
              <th>Doctor City </th>
              <th>Doctor Phone </th>
              <th>Doctor Email </th>
              <th>Doctor Specialization </th>
              <th>Doctor Experiance </th>
            </tr>
          </thead>
          <tbody>
            {docters.map((user) => (
              <tr key={user.id}>
                <td>{user.dname}</td>
                <td>{user.city}</td>
                <td>{user.phone}</td>
                <td>{user.mail}</td>
                <td>{user.specialization}</td>
                <td>{user.experiance}</td>
              </tr>
            ))} *


          </tbody>
        </table>
       </form>
      
       </div>
      
      {/* <Footer /> */}
    </>
  );
}

export default AvilableDocters;
