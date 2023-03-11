import React,{useState} from 'react'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const DesktopNav = (props) => {

    const [isScrolled, setScrolled] = useState(false)

    function handleScroll() {
        if(window.scrollY > 0){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    
    window.addEventListener('scroll', handleScroll)
    

    return (
        
        <ul className={` hidden md:flex justify-center items-center text-[1rem] font-bold font-Inter leading-[1.188rem] w-[70%]  rounded-b-[50px] space-x-[10%] text-[#B1B1B1] ${isScrolled ? 'bg-black/95':''} transition ease-in-out duration-100 `}>
            
            {/* onscroll event to make the nav bar darker*/}
            
            <li className='md:flex items-center justify-center rounded-[50px] h-[89px]'>
                <Link to='home' smooth={true} offset={0} duration={800} className={` hover:text-black  ${isScrolled ? 'text-[#B1B1B1] hover:text-white' : ''} `} >Home</Link>
            </li> 

            <li className='md:flex items-center justify-center rounded-[50px] h-[89px]'>
                <Link to='projects' smooth={true} offset={-100} duration={800} className={` 'hover:text-black ' ${isScrolled ? 'text-[#B1B1B1] hover:text-white' : ''} `}>Projects</Link>
            </li>

            <li className='md:flex items-center justify-center rounded-[50px] h-[89px]' >
                <Link to='stacks' smooth={true} offset={0} duration={800} className={` 'hover:text-black' ${isScrolled ? 'text-[#B1B1B1] hover:text-white' : ''} `}>Tech</Link>
            </li>

            <button className='md:flex items-center justify-center rounded-[50px] h-[40px] w-[100px] round-[50%] bg-black '>
            <Link to='contact' smooth={true} offset={0} duration={800} className='text-white hover:text-[#64D8D9] '>Contact</Link>
            </button>

          </ul>
         
    )
}

export default DesktopNav