import React ,{useState}from 'react';
import NavbarItems from './NavbarItems';
import { HiMenuAlt4,HiX,HiOutlineCode} from "react-icons/hi";


const MobileNav = (props) => {

    const [open, setOpen] = useState(false)

     const hamburguerIcon = <HiMenuAlt4 
                            className='w-[50%] hover:text-[#64D8D9]' size={30} 
                            onClick={() => setOpen(!open)}
                            />
                    
    const closeIcon =       <HiX 
                            className='w-[50%] hover:text-[#64D8D9]' size={30} 
                            onClick={() => setOpen(!open)}
                            />

    return (

      <div className='md:hidden flex absolute top-[0] w-screen h-[107px] justify-center items-center text-white bg-black/95 rounded-b-[50px]'>

        <HiOutlineCode className='flex w-[50%] hover:text-[#64D8D9]' size={30}/>


        {open ? closeIcon : hamburguerIcon}
        {open && <NavbarItems/>}

      </div>

        );
  };

  export default MobileNav 