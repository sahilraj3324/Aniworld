import {useState} from 'react'
import secp from '../assets/first.png'

const Features = () => {
    const [isYearly , setISYearly]=useState(false);

    const packages =[
        {name: "Membership Organisations",  description: "Our membership management software provides full automation of membership renewals and payments", },
        {name: "National Associations Presents",  description: "Our membership management software provides full automation of membership renewals and payments"},
        {name: "Clubs And Groups",  description: "Our membership management software provides full automation of membership renewals and payments"},
    ]
  return (
    <div className='md:px-14 font-abc p-4 max-w-s mx-auto py-10'>
      <div className="text-center ">
            <h2 className="md:text-5xl text-3xl font-extrabold text-blue mb-2">Trending in AniWorld </h2>
            <p className='text-white md:w-1/3 mx-auto px-4 '>A simple paragraph is comprised of three major components. The which is often a declarative sentence</p>
            <div>
                    <img src={secp} alt="" className="lg:h-[200px] hover:-translate-y-4 transition-all duration-300" />
               </div>
            
        </div>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto '>
          {
            packages.map((pkg, index)=> <div key={index} className=' py-10 md:px-6 px-4 rounded-lg rounded-br-[36px] rounded-tr-[37px] rounded-tl-[37px] rounded-bl-[37px] shadow-3xl hover:bg-hov hover:-translate-y-4 transition-all duration-500 hover:-translate-x-6 hover:py-20 gBg '>
              <h3 className='text-3xl font-bold text-center text-yello'>{pkg.name}</h3>
              <p className='text-white text-center my-5'>{pkg.description}</p>
             
              </div>)
          }
        </div>


        <div className="text-center ">
             
            <div className="mt-16">
               
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto '>
          {
            packages.map((pkg, index)=> <div key={index} className=' py-10 md:px-6 px-4 rounded-lg rounded-br-[36px] rounded-tr-[37px] rounded-tl-[37px] rounded-bl-[37px] shadow-3xl hover:bg-hov hover:-translate-y-4 transition-all duration-500 hover:-translate-x-6 hover:py-20 gBg '>
              <h3 className='text-3xl font-bold text-center text-yello'>{pkg.name}</h3>
              <p className='text-white text-center my-5'>{pkg.description}</p>
             
              </div>)
          }
        </div>

        <div className="text-center ">
             
            <div className="mt-16">
               
            </div>
        </div>
        
    </div>

    
  )
}


export default Features
