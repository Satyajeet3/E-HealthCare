import "../css/home.css";
import home1 from "../images/home1.jpg";
import blog2 from "../images/blog2.jpg";
import home3 from "../images/home3.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {

  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "linear-gradient(to right top,red,white,blue)",
        }}
      >
        <div class="bgimg">
          <div class="container text-center text-white headerset">
            <h2>Good HealthCare</h2>
            <h1>Makes a Difference</h1>
            <h3>We make it possible </h3>
            <br />
         
          </div>
        </div>

        <section class="container ourservices text-center">
          <h3>OUR SERVICES</h3>
          <div class="row rowsetting">
            <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
              <div class="imgsetting d-block m-auto bg-dark">
                <i class="fa fa-truck fa-3x text-white"></i>
              </div>
              <h4>Digital technologies </h4>
            </div>

            <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
              <div class="imgsetting d-block m-auto bg-dark">
                <i class="fa fa-truck fa-3x text-white"></i>
              </div>
              <h4>Telecommunication</h4>
            </div>

            <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
              <div class="imgsetting d-block m-auto bg-dark">
                <i class="fa fa-send fa-3x text-white"></i>
              </div>
              <h4>Public Awareness</h4>
            </div>
          </div>
        </section>

        <section
          class="portfolio"
          style={{
            backgroundImage:
              "linear-gradient(to right top, white, red)",
          }}
        >
          <div class="container text-center ">
            <h1>LATEST BLOGS</h1>
            <br />
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                <div class="card">
                  <img
                    src={home1}
                    class="card img-fluid"
                    style={{ width: "415.99px", height: "250px" }}
                  />
                  <div class="card body ">
                    <h2 class="card-title">
                    India joins hands with the Netherlands for its e-health initiative
                    </h2>
                    <p class="card-text text-left">
                      India and the Netherlands on Thursday unveiled plans for a joint thrust in the
                      e-health care sector, with the aim of providing digital health facilities and 
                      security to every Indian.
                      Part of India's ambitious National Digital Health Mission (NDHM),
                      this cooperative initiative will see the two countries work closely to
                      create capacities and put in place the requisite technology backbone to enable 
                      this revolutionary initiative.

                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                <div class="card">
                  <img
                    src={blog2}
                    class="card img-fluid"
                    style={{ width: "415.99px", height: "250px" }}
                  />
                  <div class="card body">
                    <h2 class="card-title">Benefits of blood donation</h2>
                    <p class="card-text text-left">
                      Donating blood has benefits for your emotional and physical
                      health. According to a report by the Mental Health
                      Foundation, helping others can: reduce stress improve your
                      emotional well-being benefit your physical health help get
                      rid of negative feelings provide a sense of belonging and
                      reduce isolation Research has found further evidence of the
                      health benefits that come specifically from donating blood.
                      Foundation, helping others can: reduce stress improve your
                      emotional well-being benefit
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                <div class="card">
                  <img
                    src={home3}
                    class="card img-fluid"
                    style={{ width: "415.99px", height: "250px" }}
                  />
                  <div class="card body">
                    <h2 class="card-title">
                    First phase E-health project execution in Malabar soon

                    </h2>
                    <p class="card-text text-left">
                      <ul>
                      The official process for the execution of the e-health programme in the three 
                      districts of Malabar region included in the first phase project will commence soon.
                      Three districts of Kasaragod, Kannur and Malappuram will get the benefit of the
                      project, the execution of which was commenced as a pilot project at Peoorkada
                      district model hospital, Thiruvananthapuram last month.
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          style={{
            backgroundImage:
              "linear-gradient(to right top,red,white ,black)",
          }}
        >
          <div class="text-center p-5">
            <h1 color="blue">We are currently working in these cities</h1>
            <hr class="hrline" />
            <br />
            <br />
            <div class="img1">
              <img src={mumimg} alt="Mumbai image" height="250" width="310" />
              <img src={puneimg} alt="pune" height="250" width="310" />
              <img src={hydimg} alt="hyd" height="250" width="310" />
              <img src={bangimg} alt="banglore" height="250" width="310" />
            </div>
            <div class="fourcities">
              <h3 class="fmumbai">
                Mumbai <br />
              </h3>
              <h3 class="fpune">
                Pune
                <br />
                </h3>
              <h3 class="fbanglore">
                Hyderabad
                <br />
              </h3>
              <h3 class="fbanglore">
                Banglore
                <br />
              </h3>
            </div>
          </div>
        </section> */}
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
