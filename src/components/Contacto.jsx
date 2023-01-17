import React from 'react'
import logoLinkedin from '../img/logo-linkedin.png'
import logoGmail from '../img/logo-gmail.png'
import logoWsp from '../img/logo-wsp.png'

const Contacto = () => {
  return (
    <footer id='contacto' className='text-white bg-zinc-900 pt-1'>
        <div className='flex justify-center py-8'>
          <a target="_blank" href="https://www.linkedin.com/in/franco-cid-453740233/"><img className='w-16 hover:w-20 duration-700' src={logoLinkedin} alt="" /></a>
          <a target="_blank" href="mailto:francoiovanni@gmail.com"><img className='w-32 hover:w-36 duration-700' src={logoGmail} alt="" /></a>
          <a target="_blank" href=" https://api.whatsapp.com/send/?phone=56985381436"><img className='w-16 hover:w-20 duration-700' src={logoWsp} alt="" /></a>
        </div>
    </footer>
  )
}

export default Contacto