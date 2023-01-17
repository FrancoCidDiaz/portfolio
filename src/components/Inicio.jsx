import React from 'react'
import fotoPerfil from '../img/foto-perfil.jpg'

const Inicio = () => {
  return (
    <div id='inicio' className='h-auto bg-zinc-900 flex justify-center text-white pb-24 pt-40'>
        <div className='foto-perfil rounded-full  w-1/4 '>
          <img src={fotoPerfil} alt="" />
        </div>
        <div className='w-1/4  mx-4'>
    <h1 className='text-6xl titulo-azul mb-4'>Franco Cid</h1>
    <h2 className='text-5xl'>Front end Developer </h2>
    </div>
    </div>
  )
}

export default Inicio