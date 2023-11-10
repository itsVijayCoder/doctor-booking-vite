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
            <Route path='/home' element={<Home />} />
            <Route path='/doctors'>
               <Route index element={<Doctors />} />
               <Route path=':id' element={<DoctorsDetails />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
         </Routes>
      </div>
   );
};

export default Routers;
