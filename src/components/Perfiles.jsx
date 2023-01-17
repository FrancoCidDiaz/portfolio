import React from 'react'
import logoCodewars from '../img/logo-codewars.png'
import logoGithub from '../img/logo-github.png'

const Perfiles = () => {
  return (
    <div className='mt-20 flex justify-center gap-40 mb-20'>
        <div >
        <h2 className='mx-20'>Perfil de GitHub</h2>
         <div className='rounded-xl h-52 mt-8'>
         <a target="_blank" href="https://github.com/FrancoCidDiaz"><img className='w-48 hover:w-56 duration-1000 mx-auto' src={logoGithub} alt="" /></a>
           </div>
        </div>
        <div>
        <h2 className='mx-20'>Perfil de Codewars</h2>
        <div className='rounded-xl h-52 mt-8'><a target="_blank" href="https://www.codewars.com/users/FrancoCidDiaz/stats"> <img className='w-56 mx-auto hover:w-64 duration-1000' src={logoCodewars} alt="" />
        </a></div>
        </div>
    </div>
  )
}

export default Perfiles