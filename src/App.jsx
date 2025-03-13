import { useEffect, useState } from 'react'
import './App.css'
import { FaBars } from 'react-icons/fa'
import wfaimg from './img/wfa.jpg'
import ScrollReveal from 'scrollreveal'

function App() {
 
  useEffect(()=>{
    const scroll = ScrollReveal({
      reset:true,
      duration:2600,
      distance:'60px'
  })
  scroll.reveal('.image-transform',{delay:400,origin:'top'});
  scroll.reveal('.text-transform',{delay:300,origin:'left'});
  },[])

  return (
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white overflow-hidden'>
        <div className='min-h-screen px-6 py-3 flex flex-col gap-10 md-px-10 lg:px-16 lg:py-7'>
            <header className='flex justify-between'>
                 <a href='#'>
                    <h1 className='text-4xl font-bold'>WFA.</h1>
                 </a>
                 <ul className='hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium' >
                     <li><a href='#'>Locations</a></li>
                     <li><a href='#'>Offerings</a></li>
                     <li><a href='#'>Pricing</a></li>
                     <li><a href='#'>About Us</a></li>
                 </ul>
                 <div className='hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium'>
                  <a href=''>Login</a>
                  <button className='bg-purple-900 px-2 py-1 font-medium rounded-md'>Register</button>
                 </div>
                 <div className='lg:hidden'>
                 <i class="fa-solid fa-bars fa-2x"></i>
                 </div>
            </header>
            <main className='lg:flex'>
                <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end image-transform'>
                  <img src={wfaimg} alt='wfaimg' className='outline outline-white shadow-2xl shadow-black lg:h-[600px] lg:w-[600px] lg:rounded-full'/>
                </div>
                <div className='space-y-6 mt-16  lg:flex-1 lg:order-1 lg:mt-32 text-transform'>
                <div className='text-7xl font-bold leading-tight lg:text-8xl'>
                    <h2>Let's Switch</h2>
                    <h2>To Remote</h2>
                </div>
                <p className='text-white text-xl lg:text-2xl'>WFA provides top-notch office spaces in prime locations worldwide allowing people to work from anwhere. 
                   We provide coworking spaces where people from various backgrounds like remote workers, entrepreneurs,
                   freelancers, and startup enthusiasts can work, connect, and grow their businesses.
                </p>
                <form action="" className='flex flex-col gap-2 md:flex-row md:gap-0' >
                  <input type="text" placeholder='Enter City' className='max-md:rounded-md md:rounded-l-md rounded-l-md px-3 bg-white py-3 lg:py-4 text-black md:w-80 rounded'/>
                  <button className='bg-purple-900 px-4 py-3 lg:py-4 max-md:rounded-md md:rounded-r-md rounded-r-md font-medium whitespace-nowrap'>Find Your Office</button>
                </form>
            
                <div className='flex flex-col gap-4 py-8'>
                <p className='text-xl l'>Used by these companies</p>
                <ul className="flex gap-6 ">
                        <li><i className="fa-brands fa-twitter fa-2x "></i></li>
                        <li><i className="fa-brands fa-airbnb fa-2x "></i></li>
                        <li><i className="fa-brands fa-twitter fa-2x "></i></li>
                        <li><i className="fa-brands fa-apple fa-2x "></i></li>

                    </ul>
                </div>
                </div>
                
            </main>
        </div>
    </div>

  )
}

export default App
