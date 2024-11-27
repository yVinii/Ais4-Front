import React from 'react'
import { NavbarMenu  } from '../../mockData/data'
import { IoIosRocket } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';
import './NavbarStyles/navbar_syles.css'

const Navbar = () => {
  const [open, setOpen] = React.useState(false); 
  // Controle de visibilidade do dialog
  const [isOpen, setIsOpen] = React.useState(false);

  // Função para abrir o dialog
  const openDialog = () => {
    setIsOpen(true);
  };

  // Função para fechar o dialog
  const closeDialog = () => {
    setIsOpen(false);
  };

  // Função para fechar o dialog ao clicar fora da área
  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      closeDialog();
    }
  };

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
                    <a className='hover:bg-terciary text-terciary font-semibold hover:text-white rounded-md border-2 border-terciary px-6 py-2 duration-700 hidden md:block' onClick={openDialog}>Login</a>
                    <a className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-700 hidden md:block'>Registre-se</a>
                </div>

               {/* Dialog de Login */}
                {isOpen && (
                    <div 
                    id="overlay" 
                    className="overlay" 
                    onClick={handleOverlayClick} // Evento para fechar ao clicar fora
                    >
                    <div className="dialog">
                        <div className="left">
                        <h2>Login</h2>
                        <form className='form-dialog'>
                            <div className="input-container">
                            <input
                                type="email"
                                id="email-login"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            </div>
                            <div className="input-container">
                            <input
                                type="password"
                                id="password-login"
                                name="password"
                                placeholder="Senha"
                                required
                            />
                            </div>
                            <div className="forgot-password">
                            <a href="#">Esqueceu sua senha?</a>
                            </div>
                            <div>
                            <button type="submit" className="sign-in-btn">Login</button>
                            </div>
                            
                        <div className="social-buttons">
                            <FaGoogle className="social-btn google"/>
                            <FaGithub className="social-btn github"/>
                            <FaLinkedin className="social-btn linkedin"/>
                        </div>
                        </form>
                        </div>

                        <div className="right">
                        <h2>Bem Vindo!</h2>
                        <p>Ainda não possui uma conta?</p>
                        <button className="sign-up-btn">Registre-se</button>
                        </div>
                    </div>
                    </div>
                )}

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