import React from "react";
import { faqs } from "../../asserts/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
   return (
      <div>
         <ul className=' mt-9'>
            {faqs.map((item, index) => (
               <FaqItem key={index} item={item} />
            ))}
         </ul>
      </div>
   );
};

export default FaqList;
