import React from "react";
import { doctors } from "./../../asserts/data/doctorData";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 mt-7 lg:mt-12'>
         {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
         ))}
      </div>
   );
};

export default DoctorList;
