import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="container">
          <Link
            class="navbar-brand text-warning fs-8 font-weight-bold ps-12"
            to="/home"
          >
          ELECTRONIC HEALTHCARE
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul class="navbar-nav ml-auto ">

              <li class="nav-item  ms-1 mt-2 fs-10">
                <Link to="/" className="nav-link text-white ">
                  HOME
                </Link>
              </li>

      

              <li class="nav-item  ms-1 mt-2 fs-10">
                <div class="nav-link text-white">  
                  <a href="https://www.netmeds.com/" style={{textDecoration:"none",color:"white"}}> BUY  </a>
                  </div>
              </li>


              <li class="nav-item  ms-1 mt-2 fs-10">
                <Link to="/aboutus" className="nav-link text-white ">
                  ABOUT US
                </Link>
              </li>

              {/* <li class="nav-item  ms-1 mt-2 fs-10">
                <Link to="/pr" className="nav-link text-white ">
                PATIENT REGISTER
                </Link>
              </li> */}

            
            {/* <li class="nav-item  ms-1 mt-2 fs-10">
              
              <div class="nav-link text-white">  
                <a href="/register" style={{textDecoration:"none",color:"white"}}>DOCTOR REGISTER</a>
                </div>
            </li> */}

            <li class="nav-item  ms-1 mt-2 fs-10">
              
              <div class="nav-link text-white">  
                <a href="/AllPatients" style={{textDecoration:"none",color:"white"}}>BOOK APPOINTMENT</a>
                </div>
            </li>

            <li class="nav-item  ms-1 mt-2 fs-10">
              
              <div class="nav-link text-white">  
                <a href="/personelPatient" style={{textDecoration:"none",color:"white"}}>PATIENT PROFILE</a>
                </div>
            </li>

            <li class="nav-item  ms-1 mt-2 fs-10">
              
              <div class="nav-link text-white">  
                <a href="/personelDocter" style={{textDecoration:"none",color:"white"}}>DOCTOR PROFILE</a>
                </div>
            </li>

              <li class="nav-item  nav-logout mt-2 ">

              </li>
            </ul>
          </div>
        </div>
        {/* <div className="ps-3 pe-5 text-center">
          <h5 className="text-white ">
            Welcome
            <br />
            <span>{name}</span>
          </h5>
        </div>*/ }
      </nav>
    </div>
  );
}

export default Navbar;
