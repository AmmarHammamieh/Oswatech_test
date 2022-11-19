import React from 'react'
import { Link } from 'react-router-dom';
import language from "../Images/language.svg";
import Oswatech_header from "../Images/Oswatech_header.svg";
import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


function Header() {

  function drawer() {
    if (document.getElementById("drawerBody").classList.contains("hidden")) {
      document.getElementById("drawerBody").classList.remove("hidden");
    } 
  }

  function closeDrawer() {
    if (!document.getElementById("drawerBody").classList.contains("hidden")) {
      document.getElementById("drawerBody").classList.add("hidden");
    } 
  }
  return (
      <div>
          {/* top */}
          <div className='w-full h-10 bg-[#0D323D] flex items-center '>
        <img alt='language' src={language} className="ml-20 w-6" />  
        <div className="ml-2 flex flex-col  text-white ">
          <p className='text-[0.7rem] ml-1 mb-[-0.3rem] font-Montserrat-Regular relative z-20'>Language</p>
          {/* <p className='text-xs font-Montserrat-Bold'>(English)</p> */}
          <select id='selectheader' className='bg-[#0D323D] h-fit w-full p-0 ml-1 outline-none  text-[0.2rem] font-Montserrat-Bold border-0 text-white  bg-[length:5em_5em] bg-[right_0rem_center]' defaultValue={"English"}>
            <option value={"English"}  className=''>English</option>
            <option value={"Arabic"}>Arabic</option>
            <option value={"Russian"}>Russian</option>

        </select>
        </div>
        
           </div>


          {/* bottom */}
      <div className='h-[5rem] w-full flex justify-between shadow-lg items-center '>

        
      <div className='flex items-center text-[#515151] font-Montserrat-Regular'>
          <img alt='Oswatech_header' src={Oswatech_header} className="pl-20 mr-5" />  
          <div id="Header_Left" className='hidden items-center lg:flex'>
                  <Link to="/" className='text-lg p-5'>Home</Link>
                  <span className='text-4xl'>|</span>
                  <Link to="/" className='text-lg p-5'>Buy</Link>
                  <span className='text-4xl'>|</span>
                  <Link to="/Rent" className='text-lg p-5'>Rent</Link>
                   <span className='text-4xl'>|</span>
          </div>
              </div>
              <div id="Header_Right" className='hidden pr-20 text-[#515151] lg:flex items-center font-Montserrat-Regular'>
                  <Link to="/" className='text-lg p-5'>About Us</Link>
                  <Link to="/" className='text-lg p-5 ml-1'>Contact Us</Link>
                  <span className='text-4xl'>|</span>
                  <Link to="/Login" className='text-lg p-5'>Log In</Link>
                  <button className='p-2 border-2 text-md px-4 rounded-lg border-black'>SIGN UP</button>
        </div>
        <div className='flex w-full justify-end p-2 lg:hidden'>
              <FiAlignJustify id="drawerbtn"  className='text-[#0D323D] text-4xl m-2 mt-0 cursor-pointer w-10 h-20' onClick={() => drawer()} />
         </div>
      </div>
      
       {/* Drawer */}
       <div id="drawerBody" className='hidden   lg:hidden'>
                    <div id="drawer" className=' w-full bg-[#0D323D] h-full  ml-auto'>
                        <div className='p-4 text-right flex justify-end w-full'>
                            <AiOutlineClose className='text-xl text-white cursor-pointer ' onClick={() => closeDrawer()} />
                        </div>
                        <div className='flex flex-col justify-center text-center w-full   h-4/5 text-white '>
                            {/* border-b-2 border-[#847244] */}
                            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 w-full'>
                                <Link to="/" className='font-Montserrat-Bold text-2xl'>Home </Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 w-full'>
                                <Link to="/" className='font-Montserrat-Bold text-2xl'>Buy </Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center  text-xl  p-2 w-full'>
                                <Link to="/Rent" className='font-Montserrat-Bold text-2xl'>Rent </Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center w-full  text-xl p-2 '>
                                <Link to="/" className='font-Montserrat-Bold text-2xl'>About Us</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center w-full  text-xl p-2'>
                                <Link to='/' className='font-Montserrat-Bold text-2xl'>Contact Us</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center w-full  text-xl p-2'>
                                <Link to="/" className='font-Montserrat-Bold text-2xl'>SginUp</Link>
                            </div>
                            <div className='mb-4 cursor-pointer flex justify-center w-full   text-xl p-2'>
                            <Link to="/Login" className='font-Montserrat-Bold text-2xl'>Login</Link>
                            </div>
                       
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block h-full w-full bg-black opacity-40' />
                </div>
    </div>
  )
}

export default Header