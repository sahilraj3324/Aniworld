import React from 'react'
import logo from '../assets/cute.json'
import Lottie from 'lottie-react'

const Firstpage = () => {
  return (
    <div className='gradientBg font-abc md:px-12 p-4  mx-auto '>
    <div className='rounded-xl  md:p= px-4 py-9'>
    <div>
                     <Lottie animationData={logo} className='lg:h-[386px] hover:-translate-y-4 transition-all duration-300'/> 
               </div>
       <div className="flex md:px-80 md:flex-row justify-between items-center gap-9  ">
       
          <div className="">
             <h2 className='md:text-7xl text-4xl font-bold text-blue mb-6 leading-relaxed '> Develop your skills without<h2 className='text-first'> diligence</h2> </h2>
             <p className='text-white text-2xl mb-8'>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in BHARAT.</p>
               <div className='space-x-10  flex'>
                
               <div className=''>
          <input type="email" name='email' id='email' placeholder='Your Email'
          className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
          <input type="submit" value='Sign up ' className='px-4 py-2 bg-first rounded-md -ml-2
          cursor-pointer hover:bg-white hover:text-first duration-15 transition-all '/>                 
        </div>
        <div>  <button className='px-4 py-2 gradientbg border text-white rounded-md -ml-2
          cursor-pointer hover:bg-white hover:text-first duration-15 transition-all'>Start a free enterprice trial ></button></div>
               </div>
           </div>
               
        </div>
  </div>
</div>
  )
}

export default Firstpage
