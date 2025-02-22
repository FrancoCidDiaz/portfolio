import React from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className='h-16 bg-zinc-900 text-white fixed w-full'>
        <ul className='flex flex-row 2xl:justify-end xl:justify-end md:justify-center sm:justify-center justify-center gap-2'>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="inicio" spy={true} smooth={true} offset={-50} duration={1000}>Index</Link></li>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="about" spy={true} smooth={true} offset={-100} duration={1000}>About <menu></menu></Link></li>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="proyectos" spy={true} smooth={true} offset={0} duration={1000}>Proyects</Link></li>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="habilidades" spy={true} smooth={true} offset={-50} duration={1500}>Habilities</Link></li>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="certificados" spy={true} smooth={true} offset={-20} duration={1500}>Certificates</Link></li>
            <li className='2xl:mx-8 xl:mx-6 md:mx-2 sm:mx-2 mt-4'><Link to="contacto" spy={true} smooth={true} offset={-50} duration={2000}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar