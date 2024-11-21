import React from 'react'
import { NavbarMenu  } from '../../mockData/data'
import { IoIosRocket } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false); 
  return (
    <>
        <nav className="bg-secondary shadow-md">
            <div className="container flex justify-between items-center py-8">
                {/* Logo Section */}
                <div className="text-2xl flex items-center gap-2 font-bold"> 
                    <IoIosRocket className='text-primary  animate-bounce hover:animate-spin'/>
                    <p className='text-primary uppercase font-bebas'>Ais4</p>
                    <p className="text-terciary font-raleway italic tracking-wide">.life</p>
                </div>

                {/* Menu Section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-primary">
                        {
                            NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link} className="inline-block py-1 px-3 duration-700 hover:text-primary hover:rounded-md font-semibold hover:shadow-md hover:gap:5">{item.title}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                {/* Icons Section */}
                <div className='flex items-center gap-5'>
                    <a className='hover:bg-terciary text-terciary font-semibold hover:text-white rounded-md border-2 border-terciary px-6 py-2 duration-700 hidden md:block'>Login</a>
                    <a className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-700 hidden md:block'>Registre-se</a>
                </div>

                {/* Mobile hamburguer Menu section */}
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </nav>

        {/* Mobile Sidebar section */}
        <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar