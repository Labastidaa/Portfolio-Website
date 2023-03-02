import React from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { HiChevronDown } from "react-icons/hi";
{/* Hero component */}

const Hero = () => {
    return(
        <div className = 'bg-[#000] h-screen flex flex-col justify-center items-center space-y-10' >

            {/*<===================== HERO SECTION =====================> */}
            <div className='bg-[url(/src/assets/clouds.jpg)] bg-cover w-[100%] h-[70%] flex flex-col items-center justify-center absolute top-0 rounded-[50px] rounded-t-none'>
                <div className='bg-black/80 h-[100%] w-[100%] flex flex-col items-center justify-center rounded-[inherit]'>
                    <div className=' text-white w-[73.3333333%] space-y-[16px] flex flex-col items-center justify-center '>
                        <h1 className='text-[#00B412] font-Inter font-extrabold text-[3.125rem] p-[20px]'>GeoLavz</h1>
                        <h1 className='font-Inter font-black text-[1.5rem]'> $ {' '}
                        <Typewriter
                        loop={0}
                        words = {[
                            'Developer',
                            'Life long learner',
                            'Driven by curiosity',
                        ]}
                        typeSpeed = {140}
                        deleteSpeed = {50}
                        delaySpeed = {2000}
                        cursor = {true}
                        cursorBlinking = {true}
                        />
                        </h1>
                        <p className='text-[#00B412] text-base font-Inter font-bold text-[1.25rem] text-center' >
                        Creating apps that not only look good but also have good performance.
                        </p>
                    {/* <a href="" className='text-xl text-[#00B412]'>More about me</a> */}
                    </div>
                </div>
            </div>

            {/*<===================== CONTACT ICONS ===================>*/ }
            <div className='absolute top-[75%] flex space-x-5 justify-center cursor-pointer'>

                <FiTwitter color='#fff' size={'30'}/>
                <FiGithub color='#fff' size={'30'}/>
                <BsLinkedin color='#fff' size={'30'}/>

            </div>
            
            <HiChevronDown className='absolute top-[90%]' color='#fff' size={'30'} />
            
        </div>
    )
}

export default Hero