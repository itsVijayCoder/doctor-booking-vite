import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctor/Doctors";
import DoctorsDetails from "../pages/Doctor/DoctorDetails";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
   return (
      <div>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctor-booking-vite' element={<Home />} />
            <Route path='/doctor-booking-vite/home' element={<Home />} />
            <Route path='/doctor-booking-vite/doctors'>
               <Route index element={<Doctors />} />
               <Route path=':id' element={<DoctorsDetails />} />
            </Route>
            <Route path='/doctor-booking-vite/login' element={<Login />} />
            <Route path='/doctor-booking-vite/register' element={<Signup />} />
            <Route path='/doctor-booking-vite/contact' element={<Contact />} />
            <Route
               path='/doctor-booking-vite/services'
               element={<Services />}
            />
         </Routes>
      </div>
   );
};

export default Routers;
