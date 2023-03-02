import React,{useState} from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'


import { HiMenuAlt4,HiX,HiOutlineCode } from "react-icons/hi";
import NavbarItems from './Navitems';



const Navbar = (props) => {

    {/* 
    Create reusable styles for similar items
    Use Rem for responsive sizing boxes and also responsive text.

    Abstract CSS Classes for reusable UI Components like projects
    and add custom values as classNames
    */}

    // State
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
            <>
        <div className = 'flex items-center justify-center w-screen absolute top-[0px]' id='outer-container' >

                    {/*
                        - Nav bar On Scroll : bg-[#171717]/95 Sticky or Fixed
                        - Adjust Space between links
                        - Create active, hover states
                        - Menu for mobile
                        - Intersectional observer to change nav from absolute to sticky and hide when scroll
                        - How to re-use the li (list items for mobile and desktop version)
                    */}


            <ul className='md:hidden flex justify-center items-center  w-screen h-[107px] rounded-[50px] rounded-t-none space-x-[9px] text-white'>
                    <li className='w-[35%] h-[89px] flex items-center justify-start'>
                        <a href="" className=' flex  leading-[1.188rem] text-[#D9FEA0] font-Inter font-base font-bold'>
                            <HiOutlineCode className=' md:hidden' size={30}/>
                        </a>
                    </li>

                    <li className='w-[35%] h-[89px] flex items-center justify-end' onClick={handleClick}>
                        <a href="" className='flex leading-[1.188rem] text-[#D9FEA0] font-Inter font-base font-bold'> 
                        {!nav ? <HiMenuAlt4 size='30'/> : <HiX color='#fff' size='30'/> }
                        </a>
                    </li>
            </ul>

            <DesktopNav/>
            <MobileNav className={!nav ? 'hidden' : 'flex absolute top-[108px] w-screen h-[100] bg-[#000]' }>
                {nav && <NavbarItems/>}
            </MobileNav>

            {/* <========== Hamburguer Menu ==============> */}

            {/*             
            <ul className='absolute bg-[#171717]/95 w-[80%]'>   </ul>
            */}


        </div>

        </>
    )
}

export default Navbar