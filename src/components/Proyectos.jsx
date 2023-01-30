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
import quiz from '../img/quiz-f1.png'
import logoBootstrap from '../img/logo-bootstrap.png'
import workoutTracker from '../img/workout-tracker.png'
import tipCalculator from '../img/tip-calculator.png'
import calculadora from '../img/calculadora.png'

const Proyectos = () => {
  return (
    <div id='proyectos' className='pt-12 m-auto'>
    <h2 className='text-3xl font-semibold text-center mt-20 h-28'>Proyectos</h2>
    <div className='grid grid-cols-2 grid-rows-2 place-content-center justify-center items-center mx-8 grid-proyectos'>
      <div>
        <div className='w-100 '>
        <h3 className='font-semibold text-center'>Academia virtual
          
        </h3>
        <a target="_blank" href="https://integrador-nucba-dise-o-web.vercel.app/"><img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={academia} alt="" /></a>
        </div>
        <div className='w-12 flex justify-center mx-auto gap-4 pt-8'>
          <img  src={logoHtml} alt="" />
          <img  src={logoCss} alt="" />
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/Integrador-nucba-dise-o-web"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000 m-auto' src={logoGithub} alt="" /></a>
        </div>
        </div>
      
        <div>
        <div className='w-100'>
        <h3 className='font-semibold text-center'>Blog con login de usuarios
          
        </h3>
        <a target="_blank" href="https://frontend-blog-9a1a.vercel.app/registro">
        <img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={blog} alt="" /></a>
        </div>
        <div className='w-10 h-auto flex justify-center mx-auto gap-2 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoReactHook} alt="" />
          <img  src={logoRouter} alt="" />
          <img  src={logoNode} alt="" />
          <img  src={logoMongo} alt="" />
          <img  src={logoTailwind} alt="" />
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/Frontend-Blog"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000 m-auto' src={logoGithub} alt="" /></a>
        </div>
        </div>

        <div>
        <div className='w-100 mt-10 div-proyectos'>
        <h3 className='font-semibold text-center'>Quiz Formula 1
          
        </h3>
        <a target="_blank" href="https://quiz-f1.vercel.app/"><img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={quiz} alt="" /></a>
        </div>
        <div className='w-10  flex justify-center mx-auto gap-4 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoBootstrap} alt="" />
          <img  src={logoRouter} alt="" />
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/quiz-f1"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>

        <div>
        <div className='w-100 mt-10 div-proyectos'>
        <h3 className='font-semibold text-center'>Workout-Tracker
          
        </h3>
        <a target="_blank" href="https://workout-counter.vercel.app/"><img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={workoutTracker} alt="" /></a>
        </div>
        <div className='w-10  flex justify-center mx-auto gap-4 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoBootstrap} alt="" />
          
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/workout-counter"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>
        <div>
        <div className='w-100 mt-10 div-proyectos'>
        <h3 className='font-semibold text-center'>Tip-Calculator
          
        </h3>
        <a target="_blank" href="https://tip-calculator-seven-rose.vercel.app"><img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={tipCalculator} alt="" /></a>
        </div>
        <div className='w-10  flex justify-center mx-auto gap-4 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoTailwind} alt="" />
          
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/tip-calculator"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>
        <div>
        <div className='w-100 mt-10 div-proyectos'>
        <h3 className='font-semibold text-center'>Calculadora
          
        </h3>
        <a target="_blank" href="https://calculadora-six-sigma.vercel.app/"><img className='w-100 rounded-xl h-52 hover:h-60 duration-1000 mt-6 m-auto' src={calculadora} alt="" /></a>
        </div>
        <div className='w-10  flex justify-center mx-auto gap-4 pt-8'>
          <img  src={logoReact} alt="" />
          <img  src={logoTailwind} alt="" />
          
        </div>
        <div>
          <a target="_blank" href="https://github.com/FrancoCidDiaz/calculadora"><img className='w-12 mx-auto mt-4 hover:w-16 duration-1000' src={logoGithub} alt="" /></a>
        </div>
        </div>



     
    </div>
    </div>
  )
}

export default Proyectos