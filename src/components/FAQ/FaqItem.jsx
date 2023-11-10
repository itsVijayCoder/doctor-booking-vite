import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const FaqItem = ({ item }) => {
   const { question, content } = item;

   const [isOpen, setIsOpen] = useState(false);

   const toggleAccordian = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div className='p-3 lg:p-5 rounded-xl border border-solid border-[#D9DCE2] mb-5 cursor-pointer shadow-md'>
         <div
            className='flex items-center justify-between gap-5'
            onClick={toggleAccordian}
         >
            <h4 className='text-[14px] font-[500] leading-7 lg:text-[22px] lg:leading-8 text-headingColor '>
               {question}
            </h4>

            <div className='w-7 h-7 lg:w-8 lg:h-8 text-[20px] border border-none border-[#141F21] rounded flex items-center justify-center'>
               {isOpen ? (
                  <AiOutlineMinus className='bg-primaryColor text-white text-[22px] border border-solid rounded-full ' />
               ) : (
                  <AiOutlinePlus />
               )}
            </div>
         </div>

         {isOpen && (
            <div className='mt-4'>
               <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>
                  {content}
               </p>
            </div>
         )}
      </div>
   );
};

export default FaqItem;
