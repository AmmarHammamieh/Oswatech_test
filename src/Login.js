import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';


function Login() {

  function SignIn(e) {
    e.preventDefault();
    if (document.getElementById("email").value === "") {
      document.getElementById("emailMessage").classList.remove("hidden");
    }
    if (document.getElementById("password").value === "") {
      document.getElementById("passwordMessage").classList.remove("hidden");
    }


    if ((document.getElementById("email").value !== "ahmed" || document.getElementById("password").value !== "123456789")&&(document.getElementById("password").value !== ""&&document.getElementById("password").value !== "")) {
      document.getElementById("incorrect").classList.remove("hidden");
    } else if(document.getElementById("email").value === "ahmed" || document.getElementById("password").value === "123456789"){
      document.getElementById("incorrect").classList.add("hidden");
      
    }
  }

  function emailText(e) {
    if (!document.getElementById("emailMessage").classList.contains("hidden")) {
      document.getElementById("emailMessage").classList.add("hidden");
      
    }
  }

   function passwordText(e) {
     if (!document.getElementById("passwordMessage").classList.contains("hidden")) {
      document.getElementById("passwordMessage").classList.add("hidden");
      
    }
  }
  return (
      <div>
      <Header />
      {/* Body */}
      <div className='w-full h-full'>
        <div className='m-auto  h-full lg:w-1/2    py-36'> 
          <div className='m-auto w-3/4'>
          <p className='font-Montserrat-Regular text-4xl'>Login As_User</p>
            <hr className="  border-[#0D323D] border-[2px] mt-4 w-16 rounded-xl mb-10" />
            </div>
          <form className='rounded-lg flex flex-col w-4/5 mx-auto border-2 py-10 px-20'>
            <p id="incorrect" className='mx-auto text-red-600 text-center font-Montserrat-Bold w-[20rem] mb-3 hidden'>The username/password is incorrect  try again</p>
            <label className='font-Montserrat-Regular mb-2'>
             Email/Username
            </label>
            <input id="email" type={'email'} onChange={(e)=>emailText(e)} placeholder="user@gmail.com" className='border-2 p-2 rounded-lg font-Montserrat-Regular placeholder:font-Montserrat-Regular' />
            <span id ="emailMessage" className='text-left text-sm text-red-600 font-semibold hidden'>Please enter your email</span>
            <label className='font-Montserrat-Regular mb-2 mt-2'>
             Password
            </label>
            <input  id="password" type={'password'} onChange={(e)=>passwordText(e)} placeholder="Password" className='border-2 p-2 rounded-lg font-Montserrat-Regular placeholder:font-Montserrat-Regular' />
            <span id ="passwordMessage" className='text-left text-sm text-red-600 font-semibold hidden'>Please enter the password</span>
            <div className='flex justify-between mt-2 mb-4'>
            <div className='flex items-center'>
              <input type={'checkbox'} className=" mr-2 checked:bg-[#0D323D]  focus:ring-white checked:focus:bg-[#0D323D] outline-none focus:outline-none checked:hover:bg-slate-700 rounded-sm " />
              <label className='font-Montserrat-Regular text-sm'>
             Remember Me
            </label>
            </div>
            <div className='flex items-center'>
              <a className='font-Montserrat-Regular cursor-pointer text-sm'>
             Forgot your password?
            </a>
              </div>
            </div>
            <button className='w-full p-2 bg-[#0D323D] text-white mb-4 font-Montserrat-Regular'onClick={(e)=>SignIn(e)}>Login</button>
            <p className='m-auto font-Montserrat-Regular text-sm'>
              You dont have an account? <a className='font-Montserrat-Medium text-[#0D323D] cursor-pointer'>Create Account</a>
            </p>
          </form>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login