import React from 'react'
import ALBusra from "../../Images/HomePage/ALBusra.svg";
import { FaBath } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { } from 'react-router-dom';


function ViewCard() {


  return (
      <div className='lg:w-[22%] relative shadow-md rounded-lg' >
             <img alt='ALBusra' src={ALBusra} className="w-full" />
          <div className='p-1'>
              <div className='flex space-x-5 my-2'>
              <p className='text-[#0D323D] font-Montserrat-Bold text-lg'>1200$</p>
                  <p className='font-Montserrat-Regular text-lg '>2 rooms</p>
              </div>
              <div>
                  <p className='text-[#0D323D] font-Montserrat-Regular'>Baghdad Street 1st floor</p>
              </div>

              <div>
                  <div className='flex items-center mt-2 justify-between'>
          <button className='text-right text-xs text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center pl-1  py-3'>View Home <IoIosArrowForward className='ml-2'/> </button>
                      <div className='flex space-x-2'>
                      <div className='flex items-center'>
                  <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                      <FaBed className='text-white text-sm'/>
                      </div>
                  <p className='text-[#515151] font-Montserrat-Bold ml-1 text-xs'>3 Beds</p>
                      </div>
                      <div className='flex items-center'>
                      
                  <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                      <FaBath className='text-white text-sm'/>
                      </div>
                      <p className='text-[#515151] font-Montserrat-Bold text-xs ml-1'>1 Baths</p>
                          </div>
                          </div>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default ViewCard