import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                E-HEALTHCARE
              </h5>
              <p>
              We possess a deep respect for individuals, an unwavering commitment to 
              the communities in which we operate, and a belief in patient-centred 
              quality care
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Services
              </h5>
              <p>
                <a href="#" class="text-white">
                  Buy medication
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/home" class="text-white">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/donate" class="text-white">
                 Appointment
                </Link>
              </p>
              <p>
                <Link to="/view" class="text-white">
                  History
                </Link>
              </p>
              <p>
                <Link to="/profile" class="text-white">
                  Profile
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Nagpur, Maharashtra
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>eHealthCare@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 8983536940
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 8355911685
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2022 All rights reserved by:
                <a href="#">
                  <strong class="text-warning">IACSD Pune</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
