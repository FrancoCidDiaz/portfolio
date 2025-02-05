import React from 'react'

const About = () => {
  return (
    <div id='about' className='text-black mt-20 text-center'>
        <h2 className='text-3xl font-semibold animacion-about text-center'> About me</h2>
        <div className='flex justify-center'>
        <p className='mt-12 animacion-descripcion font-medium text-center text-2xl'>Software developer with knowledge in Javascript, Python, Java and C#. <br />
         Currently in the second year of Tecnico en programacion y analisis de sistemas at AIEP.
        Specialized in web development. Multiple projects available on my github. <br />
        {/* <p>Cuento con 1 año de experiencia laboral en desarrollo de un Ecommerce, con las siguientes tecnologias: Typescript, React, NestJs, MariaDb.   </p>      */}
        </p>
        </div>
    </div>
  )
}

export default About