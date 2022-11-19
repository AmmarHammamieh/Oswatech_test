import React from 'react'
import ALBusra from "../../Images/HomePage/ALBusra.svg";
import { FaBath } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Card() {
  return (
      <Link to="/Rent/ViewHouse" className='w-fit relative'>
          <img alt='ALBusra' src={ALBusra} className="w-full" />
          <button className='text-center text-sm text-[#019DB3] font-Montserrat-Bold bg-white rounded-xl absolute right-2 top-2 px-4 py-1'>New</button>
          <div>
              <div className='flex space-x-2 my-2'>
              <p className='text-[#0D323D] font-Montserrat-Bold'>3.000$</p>
                  <p className='font-Montserrat-Regular text-sm'>New Baghdad, Iraq</p>
              </div>
              <div>
                  <div className='flex items-center space-x-2'>
                  <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                      <FaBed className='text-white text-sm'/>
                      </div>
                  <p className='text-[#515151] font-Montserrat-Bold'>2 Beds</p>

                  <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                      <FaBath className='text-white text-sm'/>
                      </div>
                      <p className='text-[#515151] font-Montserrat-Bold'>2 Baths</p>
                      </div>
                  </div>
          </div>
    </Link>
  )
}

export default Card