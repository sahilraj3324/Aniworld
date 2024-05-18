import React from 'react'
import Lottie from 'lottie-react'
import img from '../assets/world.json'
import imgn from '../assets/fig.json'

const Seclas = () => {
  return (
    <div className='md:px-20 p-4  font-abc max-w-screen-2x1 mx-auto items-center '>
    <div className=' rounded-xl md:p= px-4 py-9  '>
          <div className=" items-center">
             <h2 className='md:text-7xl text-2xl font-bold text-blue mb-6 leading-relaxed '>The place for anyone from anywhere to build anything </h2>
             <p className='text-white text-1xl mb-8'>Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
               <div className='space-x-5 space-y-4 item-center'>
                
                <button className='btnprimary'>Sign up For GitHub </button>
                <button className='btnprimary gradientBg border hover: text-first'>Start a Free enterprice trial -> </button>
          
               </div>
               
           </div>
           <div className=''>
            <Lottie animationData={img} className='lg:h-[500px]' />
           </div>
           
        
  </div>
  
</div>
  )
}

export default Seclas
