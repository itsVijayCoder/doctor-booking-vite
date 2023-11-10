import React from "react";

const Contact = () => {
   return (
      <div>
         <section>
            <div className='mx-auto max-w-screen-md px-4'>
               <h2 className='heading text-center'>Contact Us</h2>
               <p className='text-para text-center font-light mb-8 lg:mb-16'>
                  Got a technical issue? Want to send feedback about a beta
                  feature? Let us know.
               </p>

               <form action='3' className='space-y-8'>
                  <div>
                     <label htmlFor='email' className='form-label'>
                        Your Email
                     </label>

                     <input
                        type='email'
                        id='email'
                        placeholder='example@gmail.com'
                        className='form-input mt-1'
                     />
                  </div>

                  <div>
                     <label htmlFor='subject' className='form-label'>
                        Subject
                     </label>

                     <input
                        type='text'
                        id='subject'
                        placeholder='Let us Know how we can help you'
                        className='form-input mt-1'
                     />
                  </div>

                  <div className='sm:col-span-2'>
                     <label htmlFor='message' className='form-label'>
                        Your Message
                     </label>

                     <textarea
                        rows='6'
                        type='text'
                        id='message'
                        placeholder='Leave a comment....'
                        className='form-input mt-1'
                     />
                  </div>

                  <button type='submit' className='btn rounded-md sm:w-fit'>
                     Submit
                  </button>
               </form>
            </div>
         </section>
      </div>
   );
};

export default Contact;
