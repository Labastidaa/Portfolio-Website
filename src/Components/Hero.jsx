import React from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

{/* Hero component */}

const Hero = () => {
    return(
        <div className = 'bg-[#000] h-screen flex flex-col justify-center items-center space-y-10' >

            <div className=' text-white w-[73.3333333%] space-y-[16px] flex flex-col items-center justify-center'>
                <h1 className='text-[#00B412] font-Inter font-extrabold text-[3.125rem] '>GeoLavz</h1>
                <h1 className='font-Inter font-black text-[3.12rem]'>$| Dev init</h1>
                <p className='text-[#00B412] text-base font-Inter font-bold text-[1rem]' >
                    I am Geovanni a developer
                    Life long learner, driven by curiosity
                </p>
                {/* <a href="" className='text-xl text-[#00B412]'>More about me</a> */}
            </div>

            <div className='flex space-x-5 justify-center cursor-pointer'>

                <FiTwitter color='#fff' size={'30px'}/>
                <FiGithub color='#fff' size={'30px'}/>
                <BsLinkedin color='#fff' size={'30px'}/>

            </div>
        </div>
    )
}

export default Hero