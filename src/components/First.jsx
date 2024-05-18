import React from 'react'
import about from '../assets/Anime.png'

const First = () => {
  return (

<div className='md:px-20 font-abc p-4 max-w-screen-2x1 mx-auto '>
   <div className=' rounded-xl rounded-br-[80px] md:p=9 px-4 py-9'>
       <div className="flex flex-col md:flex-row-reverse md:flex-row justify-between items-center gap-9  ">
         <div>
            <img src={about} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300" />
         </div>
          <div className="md:w-3/5">
             <h2 className='md:text-7xl text-2xl font-bold text-blue mb-6 leading-relaxed '>Inspire with your<h2 className='text-yello'>Great Ideas</h2> </h2>
             <p className='text-white text-2xl mb-8'>Where to grow your buisness as a photographer: site or social media?</p>
               <div className='space-x-5 space-y-4'>
                <button className='btnprimary'>Register</button>
               </div>
           </div>
        </div>
  </div>
</div>

  )
}

export default First
