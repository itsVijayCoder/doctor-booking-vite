import { useState } from "react";
import avatar from "../../asserts/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
const Feedback = () => {
   const [showFeedbackForm, setShowFeedbackForm] = useState(false);
   return (
      <div>
         <div className='mb-12 '>
            <h4 className='text-[20px] leading-7 text-headingColor font-bold mb-7 '>
               All reviews (272)
            </h4>

            <div className='flex justify-between gap-10 mb-7'>
               <div className='flex gap-3'>
                  <figure className='w-10 h-10 rounded-full'>
                     <img src={avatar} alt='' className='w-full' />
                  </figure>

                  <div className=''>
                     <h5 className='text-[17px] leading-6 text-primaryColor font-bold '>
                        Lokesh
                     </h5>
                     <p className='text-[14px] leading-4 text-textColor '>
                        {formatDate("02-15-2023")}
                     </p>

                     <p className='text-para mt-3 text-[16px]'>
                        Good services, highly recommended.
                     </p>
                  </div>
               </div>

               <div className='flex gap-1'>
                  {[...Array(5).keys()].map((_, index) => (
                     <AiFillStar key={index} color='#0067FF' />
                  ))}
               </div>
            </div>
         </div>

         {!showFeedbackForm && (
            <div className='text-center'>
               <button
                  className='btn'
                  onClick={() => setShowFeedbackForm(true)}
               >
                  Give Feedback
               </button>
            </div>
         )}

         {showFeedbackForm && <FeedbackForm />}
      </div>
   );
};

export default Feedback;
