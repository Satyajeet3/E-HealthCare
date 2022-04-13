import { Route, Routes } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Terms from "./components/Terms";
import Profile from "./components/Profile";


import PatientRegister from "./components/PatientRegister";

import AvilableDocters from "./components/AvilableDocters";
import DoctersProfile from "./components/DoctersProfile";
import Personel from "./components/Personel";
import PersonelDocter from "./components/PersonelDocter";
import UpdatePatient from "./components/UpdatePatient";






function App() {
    return (
        <>
            <Routes>
            
                <Route exact path="/register" element={<Register />} />
                <Route exact path='/pr' element={<PatientRegister/>}/>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/aboutus" element={<About />} />
                <Route exact path="/termsandconditions" element={<Terms />} />
               
                <Route exact path="/profile" element={<Profile />} />
   
                <Route exact path="/AllPatients" element={<AvilableDocters />} />
                <Route exact path="/AllDocters" element={<DoctersProfile />} />
                <Route exact path="/personelPatient" element={<Personel />} />
                <Route exact path="/personelDocter" element={<PersonelDocter />} />

                <Route exact path="/updatePatient" element={<UpdatePatient />} />
            </Routes>


        </>
    );
};

export default App;
