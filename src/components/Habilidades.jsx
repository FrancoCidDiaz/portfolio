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


const Habilidades = () => {
  return (
    <div id='habilidades' className='bg-zinc-900 text-white h-screen m-auto w-screen'>
        <div className='w-3/4 m-auto'>
        <h2 className='text-3xl font-semibold text-center mt-20 mb-20 pt-12'>Habilidades</h2>
        <p className='px-8 text-center '>Tengo experiencia comprobable en: React, Html, Css, Javascript, Aws, Tailwind, Bootstrap, React Router Dom, React Context, React Hook Form, React context, 
           Node js, Mongo DB, Mongoose.
        </p>
        {/* <p className='px-8 text-center '>Actualmente estudiando Node js</p> */}
        <div className='grid grid-cols-11 grid-rows-2 mt-32 gap-4 '>
            <div >
                <img src={logoReact} alt="" />
            </div>
            <div>
                <img src={logoHtml} alt="" />
            </div>
            <div>
                <img src={logoCss} alt="" />
            </div>
            <div>
                <img src={logoJs} alt="" />
            </div>
            <div>
                <img src={logoAws} alt="" />
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
                <img src={logoMongo} alt="" />
            </div>

        </div>
        </div>
    </div>
  )
}

export default Habilidades