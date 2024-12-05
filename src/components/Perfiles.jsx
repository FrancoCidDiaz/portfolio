import React from 'react'
import logoCodewars from '../img/logo-codewars.png'
import logoGithub from '../img/logo-github.png'

const Perfiles = () => {
  return (
    <div className='mt-20 flex justify-center gap-10 mb-20'>
        <div >
        <h2 className='mx-20'>GitHub</h2>
         <div className='rounded-xl h-40 mt-8'>
         <a target="_blank" href="https://github.com/FrancoCidDiaz"><img className='w-40 hover:w-44 duration-1000 mx-auto' src={logoGithub} alt="" /></a>
           </div>
        </div>
        <div>
        <h2 className='mx-20'>Codewars</h2>
        <div className='rounded-xl h-40 mt-8'><a target="_blank" href="https://www.codewars.com/users/FrancoCidDiaz/stats"> <img className='w-40 mx-auto hover:w-44 duration-1000' src={logoCodewars} alt="" />
        </a></div>
        </div>
    </div>
  )
}

export default Perfiles