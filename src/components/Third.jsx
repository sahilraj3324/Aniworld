import React from 'react'
import secp from '../assets/Anime2.png'

const Third = () => {
  return (
    <div className='md:px-20 font-abc p-4 max-w-screen-2x1 mx-auto mt-20 '>
    <div className=' rounded-xl rounded-br-[80px] md:p=9 px-4 py-9'>
       <div className="flex flex-col md:flex-row justify-between items-center gap-9  ">
       <div>
                    <img src={secp} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300" />
               </div>
          <div className="md:w-3/5">
             <h2 className='md:text-5xl text-2xl font-bold text-blue mb-6 leading-relaxed '>The unseen of spending three years at Pixelgrade </h2>
             <p className='text-white text-2xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
               <div className='space-x-5 space-y-4'>
                <button className='btnprimary'>Learn More</button>
                
               </div>
           </div>
               
        </div>
  </div>
</div>
  )
}

export default Third
