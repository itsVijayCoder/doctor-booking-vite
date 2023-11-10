import React from "react";
import { services } from "../../asserts/data/services";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-[2rem] lg:mt-[3rem]'>
         {services.map((item, index) => (
            <ServicesCard item={item} index={index} key={index} />
         ))}
      </div>
   );
};

export default ServicesList;
