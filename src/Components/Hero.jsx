import React,{useState} from 'react'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
{/* Hero component */}

const Hero = () => {

    const [scroll, setScroll] = useState(false)

    function handleScroll() {
        if(window.scrollY > 0){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    
    window.addEventListener('scroll', handleScroll)

    return(
        <div name='home' className = 'h-screen flex flex-col justify-center items-center space-y-10'>

            {/*<===================== HERO SECTION =====================> */}
            
                {/* [url(/src/assets/clouds.jpg)] */}
                
                <div className='bg-white h-[100%] w-[100%] font-Inter flex flex-col items-center justify-center rounded-[inherit]'>
                    <div className=' text-black w-[70%] space-y-[16px] flex flex-col items-center justify-center '>
                        <h1 className='md:text-[7rem] relative top-2 sm:text-[6rem] text-[4rem] bg-gradient-to-r from-[#387EE7] to-[#64D8D9] text-transparent bg-clip-text font-extrabold p-[20px]'>GeoLavz</h1>
                        <h1 className='md:text-[2rem] text-[1.2rem] font-bold flex leading-7 text-[#124849]'>  { <HiChevronRight size={30}/> }


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
                        
                        {/*<===================== CONTACT ICONS ===================>*/ }
                        <div className='py-[70px] flex space-x-5 justify-center cursor-pointer'>

                            <FiTwitter color='#000' size={'30'}/>
                            <FiGithub color='#000' size={'30'}/>
                            <BsLinkedin color='#000' size={'30'}/>

                        </div>
                    {/* <a href="" className='text-xl text-[#00B412]'>More about me</a> */}
                    </div>
                </div>
            

            <Link to='projects' smooth={true} offset={-120} duration={500} >
                <HiChevronDown className={`absolute top-[85%] animate-bounce  ${scroll ? 'hidden transition-opacity ease-in-out duration-10000' : ''}`} color='#000' size={'30'} / >
            </Link>
            
            
            
            
        </div>
    )
}

export default Hero