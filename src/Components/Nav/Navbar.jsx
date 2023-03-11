import React,{useState} from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'


const Navbar = (props) => {

    {/* 
    Create reusable styles for similar items
    Use Rem for responsive sizing boxes and also responsive text.

    Abstract CSS Classes for reusable UI Components like projects
    and add custom values as classNames
    */}


    return(

        <div className = 'flex items-center justify-center w-screen fixed top-[0px] ' id='outer-container' >

                    {/*
                        - Nav bar On Scroll : bg-[#171717]/95 Sticky or Fixed
                        - Adjust Space between links
                        - Create active, hover states
                        - Menu for mobile
                        - Intersectional observer to change nav from absolute to sticky and hide when scroll
                        - How to re-use the li (list items for mobile and desktop version)
                    */}

            <MobileNav/>
            <DesktopNav/>


            {/* <========== Hamburguer Menu ==============> */}

            {/*             
            <ul className='absolute bg-[#171717]/95 w-[80%]'>   </ul>
            */}


        </div>

    )
}

export default Navbar