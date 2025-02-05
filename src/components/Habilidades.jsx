import React from 'react'
import logoReact from '../img/logo-react.png'
import logoHtml from '../img/logo-html.png'
import logoCss from '../img/logo-css.png'
import logoJs from '../img/logo-js.png'
import logoTailwind from '../img/logo-tailwind.png'
import logoRouter from '../img/logo-router.png'
import logoReactHook from '../img/logo-react-hook.png'
import logoNode from '../img/logo-node.png'
import logoMongo from '../img/logo-mongo.png'
import logoBootstrap from '../img/logo-bootstrap.png'
import logoAws from '../img/logo-aws.png'
import logoJava from '../img/logo-java.png'
import logoTypescript from '../img/logo-typescript.png'
import logoNest from '../img/logo-nest.svg'
import logoPython from '../img/logo-python.png'
import logoCSharp from '../img/logo-c#.png'
import logoDotNet from '../img/logo-.net.png'
import logoFastApi from '../img/logo-fastapi.png'
import logoPostgre from '../img/logo-postgre.png'
import logoMySql from '../img/logo-mysql.png'
import logoNext from '../img/logo-next.png'
import logoZustand from '../img/logo-zustand.png'


const Habilidades = () => {
  return (
    <div id='habilidades' className='bg-zinc-900 text-white h-screen m-auto w-screen'>
        <div className='w-3/4 m-auto'>
        <h2 className='text-3xl font-semibold text-center mt-20 mb-20 pt-12'>Habilities</h2>
        {/* <p className='px-8 text-center '>Tengo experiencia comprobable en: React, Html, Css, Javascript, Aws, Java, Tailwind, Bootstrap, React Router Dom, React Context, React Hook Form, React context, 
           Node js, Mongo DB, Mongoose.
        </p> */}
        {/* <p className='px-8 text-center '>Actualmente estudiando Node js</p> */}
        <div className='grid grid-cols-10 grid-rows-2 mt-20 gap-4 '>
            <div >
                <img src={logoReact} alt="" />
            </div>
         
           
            <div>
                <img src={logoJs} alt="" />
            </div>
            <div>
                <img src={logoAws} alt="" />
            </div>
            <div>
                <img src={logoJava} alt="" />
            </div>
            <div>
                <img src={logoPython} alt="" />
            </div>
            <div>
                <img src={logoFastApi} alt="" />
            </div>
            <div>
                <img src={logoCSharp} alt="" />
            </div>
            <div>
                <img src={logoDotNet} alt="" />
            </div>
            <div>
                <img src={logoNext} alt="" />
            </div>
            
            <div>
                <img src={logoRouter} alt="" />
            </div>
            <div>
                <img src={logoTailwind} alt="" />
            </div>
            <div>
                <img src={logoBootstrap} alt="" />
            </div>
            <div>
                <img src={logoReactHook} alt="" />
            </div>
            <div>
                <img src={logoNode} alt="" />
            </div>
            <div>
                <img src={logoPostgre} alt="" />
            </div>
            <div>
                <img src={logoMySql} alt="" />
            </div>
            <div>
                <img src={logoMongo} alt="" />
            </div>
            <div>
                <img src={logoTypescript} alt="" />
            </div>
            <div>
                <img src={logoNest} alt="" />
            </div>
            <div>
                <img src={logoZustand} alt="" />
            </div>

            {/* <div>
                <img src={logoHtml} alt="" />
            </div>
            <div>
                <img src={logoCss} alt="" />

            </div> */}
        </div>
        </div>
    </div>
  )
}

export default Habilidades