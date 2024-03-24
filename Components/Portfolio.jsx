import React from 'react';
const Hero = () => {
  return (
    <div className='container flex flex-col-reverse md:flex-row items-center mt-10 space-y-0 md:space-y-0'>
      <div className='flex flex-col text-center space-y-12 md:w-1/2'>
        <h1 className='mx-w-md text-4xl font-bold  mb-1 md:text-5xl md:text-left'>
          Building Better Products Using Advanced Technologies
        </h1>
        <p className="max-w-sm text-center text-grey-500 ">
          At Collectives, we are passionate about crafting innovative software 
          solutions that empower businesses to thrive in the digital age.
          With a team of experienced developers, designers, and strategists, 
          we specialize in delivering cutting-edge software products tailored
          to meet the unique needs of our clients.
        </p>
        <div className='flex justify-center'>
          <a href="" className="p-3 px-6 pt-2 rounded-full bg-green-500 baseline hover:text-white">Get Started</a>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img  src="/images/launch.png" 
      alt="collectives" /> 
      </div>
      <div></div>
    </div>
  )
}

export default Hero;
