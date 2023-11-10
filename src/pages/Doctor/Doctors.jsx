import { doctors } from "../../asserts/data/doctorData";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
   return (
      <>
         <section className='bg-[#fff9ea] '>
            <div className='container text-center'>
               <h2 className='heading'>Find a Doctor</h2>
               <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-lg flex items-center justify-between '>
                  <input
                     type='search'
                     placeholder='Search Doctor'
                     className='w-full py-4 pl-4 pr-2 bg-transparent cursor-pointer focus:outline-none placeholder:text-textColor'
                  />

                  <button className='btn mt-0 rounded-none rounded-r-lg'>
                     Search
                  </button>
               </div>
            </div>
         </section>

         <section>
            <div className='container'>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 '>
                  {doctors.map((doctor) => (
                     <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
               </div>
            </div>
         </section>

         <section>
            <div className='container'>
               <div className='mx-auto xl:w-[470px]'>
                  <h2 className='head-2 text-center'>What our patients say</h2>
                  <p className='text-para text-center'>
                     World-class care for everyone. Our health System offers
                     unmatched,expert health care.
                  </p>
               </div>
               <Testimonial />
            </div>
         </section>
      </>
   );
};

export default Doctors;
