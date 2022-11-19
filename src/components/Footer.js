import React from 'react'
import Oswatech_footer from "../Images/Oswatech_footer.svg";
import AppleApp from "../Images/AppleApp.svg";
import AndroidApp  from "../Images/AndroidApp.svg";
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { HiArrowNarrowRight } from 'react-icons/hi';


function Footer() {
  return (
      <div className='relative bottom-0'>
          <div className='lg:w-1/3 w-3/4 h-fit bg-white flex space-x-2 items-center py-2 px-4 rounded-lg mb-[-2rem] z-10 relative m-auto shadow-[#0D323D] shadow-2xl'>
              <MdMail className='text-3xl mr-1' />
              <input type={'text'} placeholder="Subscribe to mail feed" className='focus:outline-none focus:ring-white  mx-2 w-full placeholder:font-Montserrat-Regular border-0'/>
              <div className='flex items-center bg-[#0D323D] text-white py-1 px-2 rounded-lg'>
                  <p className=' font-Montserrat-Regular'>Done</p>
                  <HiArrowNarrowRight className='ml-2 text-xl'/>
              </div>
          </div>
          <div className=' grid lg:grid-cols-5 grid-cols-3 pt-32  text-white bg-[#0D323D] rounded-t-3xl   mt-2 z-0 relative'>
              <div className='w-fit lg:col-start-1 lg:col-end-3 col-start-1 col-end-4 mx-auto flex flex-col   '>
           {/* Left */}       
          <img alt='Oswatech_footer' src={Oswatech_footer}  className="w-40"/>  
          <hr className="  bg-gray-200 border-[3px] my-4 w-10 rounded-lg"/>
                  <p className='break-words w-[17rem] font-Poppins-Regular'>The most beautiful exclusive properties and luxury apartments</p>
                  <div className='flex w-full items-center mt-10 space-x-4'>
                  <GrFacebookOption className='text-4xl text-[#0D323D] bg-white p-1 rounded-full  ' />
                  <AiOutlineTwitter className='text-4xl text-white bg-[#019DB3] p-1 rounded-full  ' />
                  <AiFillInstagram className='text-4xl text-[#0D323D] bg-white p-1 rounded-full  ' />
                  <BsTelegram className='text-4xl text-[#0D323D] bg-white p-[0.4rem] rounded-full  ' />
                  </div>
              </div>
           {/* Right */} 
              <div className='mt-10 lg:mt-0 lg:col-start-3 col-start-1 lg:col-end-6 col-end-4 flex justify-around w-full h-full '>
          <div className='w-fit '>
          <p className='font-Montserrat-Bold'> Useful Links</p>
          <hr className="  bg-gray-200 border-[3px] my-2 w-12 rounded-lg"/>
              <p className='my-4 font-Montserrat-Regular'>About</p>
          <p className='my-4 font-Montserrat-Regular'>Partners</p>
          <p className='my-4 font-Montserrat-Regular'>Contact</p>
              
          </div>
          <div className='w-fit ml-5 lg:ml-0'>
          <p className='font-Montserrat-Bold'>Help?</p>
          <hr className="  bg-gray-200 border-[3px] my-2 w-14 rounded-lg"/>
          <p className='my-4 font-Montserrat-Regular'>FAQ</p>
          <p className='my-4 font-Montserrat-Regular'>Term & Condition</p>
          <p className='my-4 font-Montserrat-Regular'>Policy</p>
          <p className='my-4 font-Montserrat-Regular'>Privacy</p>
              
              
          </div>
          <div className='w-fit  mr-10'>
          <p className='font-Montserrat-Bold'>Download the app </p>
            <hr className="  bg-gray-200 border-[3px] my-2 w-14 rounded-lg" />
                   <div className='flex items-center '>  
                        <img alt='AppleApp' src={AppleApp}  className="cursor-pointer mt-10 lg:w-30 w-20"/>  
                        <img alt='AndroidApp' src={AndroidApp} className="cursor-pointer ml-2 mt-10 lg:w-30 w-20" /> 
                    </div>                 
              </div>
              </div>
          </div>
          
          {/* bottom */}
          <div className='w-full h-16 bg-cyan-500 flex justify-around lg:px-32 px-3'>
              <div className='w-full flex justify-start items-center '>
              <p className='font-Montserrat-Regular text-sm lg:text-md'>@ copyright 2021, IZAR.com</p>
                  
              </div>
              <div className='w-full flex justify-end items-center '>

                  <p className='font-Montserrat-Regular text-sm lg:text-md'>Terms & condition | Privacy Policy</p>
                  </div>

          </div>
    </div>
  )
}

export default Footer