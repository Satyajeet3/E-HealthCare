import React from "react";
import "../css/home.css";
import img from "../images/AboutUs.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (

    <div>
      <Navbar />

      <div
        class="min-vh-100 pt-5 text-Black"
        style={{
          backgroundImage:
            "linear-gradient(to right top, red ,pink)",
        }}
      >
        <h3 class="mt-5 pt-5 text-center  display-4 fw-bold">ELECTRONIC HEALTHCARE</h3>
        <div class="container-fluid p-5 ">
          <div class="row m-auto">
            <div class="col-lg-8">
              <h3>
                <b>ABOUT US</b>
              </h3>
              <br />
              <h3>
                <strong>Our Mission</strong>
              </h3>
              <h5>
                <p>
                An electronic health record (EHR) is the systematized collection of patient and population electronically
                stored health information in a digital format.These records can be shared across different health care 
                settings. Records are shared through network-connected, enterprise-wide information systems or other 
                information networks and exchanges. EHRs may include a range of data, including demographics, medical 
                history, medication and allergies, immunization status, laboratory test results, radiology images, vital 
                signs, personal statistics like age and weight, and billing information.
                </p>
              </h5>
              <br />
            </div>
            <div class="col-lg-4 mt-5">
              <img
                src={img}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
            </div>
          </div>
        </div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="col-lg-6">
              <div className="font text-center">
                <i className="fas fa-recycle fa-9x " />
              </div>
              <br />
              <div className=" text-center m-auto">
                <div className="row ">
                  {/* <h3>
                    <i className=" fas fa-circle "> Donate </i>
                    <i className=" fas fa-circle "> Help </i>
                    <i className=" fas fa-circle "> Save Life</i>
                  </h3> */}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h2>
                <strong>Our Vision</strong>
              </h2>
              <br />
              <h5>
                <p>
                  "We are passionate about improving the quality of patient care through the effective and innovative use
                  of enabling technologies.”
                </p>
              </h5>
              <h5>
                <p>
                Here at the eHealth Centre of Excellence, we believe in a healthcare system that is completely and wholly
                equitable, that serves all equally regardless of race, class, gender, sexual orientation or any other 
                identificatory category. We are committed to acknowledging, understanding, and confronting systemic 
                oppression in all its various and insidious forms. 
                </p>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
