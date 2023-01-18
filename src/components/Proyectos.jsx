import React from 'react'
import academia from '../img/academia.png'
import logoReact from '../img/logo-react.png'
import logoHtml from '../img/logo-html.png'
import logoCss from '../img/logo-css.png'
import logoJs from '../img/logo-js.png'
import logoTailwind from '../img/logo-tailwind.png'
import logoRouter from '../img/logo-router.png'
import logoReactHook from '../img/logo-react-hook.png'
import logoNode from '../img/logo-node.png'
import logoMongo from '../img/logo-mongo.png'
import logoGithub from '../img/logo-github.png'
import blog from '../img/blog.png'

const Proyectos = () => {
  return (
    <div id='proyectos' className='pt-12 m-auto'>
    <h2 className='text-3xl font-semibold text-center mt-20 h-28'>Proyectos</h2>
    <div className=' flex justify-center gap-32'>
      <div>
        <div>
        <h3 className='font-semibold text-center'>Academia virtual
          
        </h3>
        <a target="_blank" href="https://integrador-nucba-dise-o-web.vercel.app/"><img className='rounded-xl h-52 hover:h-60 duration-1000 mt-6' src={academia} alt="" /></a>
        </div>
        <div className='w-12 flex mx-28 gap-4 pt-8'>
          <img  src={logoHtml} alt="" />
          <img  src={logoCss} alt="" />
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/Integrador-nucba-dise-o-web"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>
      
        <div>
        <div>
        <h3 className='font-semibold text-center'>Blog con login de usuarios
          
        </h3>
        <a target="_blank" href="https://frontend-blog-9a1a.vercel.app/registro">
        <img className='rounded-xl h-52 hover:h-60 duration-1000 mt-6' src={blog} alt="" /></a>
        </div>
        <div className='w-10 h-auto flex flex-row gap-2 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoReactHook} alt="" />
          <img  src={logoRouter} alt="" />
          <img  src={logoNode} alt="" />
          <img  src={logoMongo} alt="" />
          <img  src={logoTailwind} alt="" />
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/Frontend-Blog"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>


     
    </div>
    </div>
  )
}

export default Proyectos