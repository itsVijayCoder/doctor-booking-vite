/* eslint-disable no-undef */
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctor/Doctors";
import DoctorsDetails from "../pages/Doctor/DoctorDetails";
// import { loadEnv } from "vite";
// import dotenv from "dotenv";

// dotenv.config();

import { Routes, Route } from "react-router-dom";

const Routers = () => {
   // const env = loadEnv(process.env.NODE_ENV, process.cwd());

   const basePath =
      process.env.NODE_ENV === "production" ? "/doctor-booking-vite/" : "/";
   return (
      <div>
         <Routes>
            <Route path={basePath}>
               <Route index element={<Home />} />
               {/* <Route path='home' element={<Home />} /> */}
               <Route path='login' element={<Login />} />
               <Route path='register' element={<Signup />} />
               {/* <Route > */}
               <Route path='doctors' element={<Doctors />} />
               <Route path='doctors/:id' element={<DoctorsDetails />} />
               {/* </Route> */}
               <Route path='contact' element={<Contact />} />
               <Route path='services' element={<Services />} />
            </Route>
         </Routes>
      </div>
   );
};

export default Routers;
