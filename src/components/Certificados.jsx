import React from 'react'
import { useState } from 'react'
import logoUdemy from '../img/logo-udemy.png'
import Modal from './Modal'
import certificado1 from '../img/certificado1.png'
import certificado2 from '../img/certificado2.png'
import certificado3 from '../img/certificado3.png'
import certificado4 from '../img/certificado4.png'

const Certificados = () => {

const [modal1, setModal1] = useState(false)
const [modal2, setModal2] = useState(false)
const [modal3, setModal3] = useState(false)
const [modal4, setModal4] = useState(false)


  return (
    <div id='certificados' className='mx-40'>
        {modal1 && <Modal certificado={certificado1} setModal1={setModal1}/>}
        {modal2 && <Modal certificado={certificado2} setModal2={setModal2}/>}
        {modal3 && <Modal certificado={certificado3} setModal3={setModal3}/>}
        {modal4 && <Modal certificado={certificado4} setModal4={setModal4}/>}
        <h2 className='text-3xl font-semibold text-center pt-20'>Certificados</h2>

        <div className='grid grid-cols-4 mt-20 mx-12'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-center'>Master en CSS  <br /> <span className='autor-curso'> Victor Robles </span></h3>
                <div className='h-36 mt-8 mx-16 w-52 hover:w-60 duration-1000'><a target="_blank" href="https://www.udemy.com/share/102qkK3@F0rMEjWKy7DfLd94iGJvX3xnK7vBsMFfnit-LFtNzmJaTAqFpIFX86IBHWgpR6m-ag==/">
                    <img className='rounded-xl object-center' src={logoUdemy} alt="" /></a></div>
                <div className='text-center text-white bg-zinc-900 rounded-xl w-32 hover:bg-zinc-600 duration-700 p-1'> <button onClick={() => setModal1(true)}>Certificado</button> </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-center'>Master Logica de Programacion <br /> <span className='autor-curso'>Victor Robles </span></h3>
                <div className='h-36 mt-8 mx-16 w-52 hover:w-60 duration-1000'><a target="_blank" href="https://www.udemy.com/share/104HCw3@BajWb8Tx1eRCjNq_fssZyMi7JcejA0Ymx2NsKuhoafPjd_OL1iSRnAv2aOuTOhcsyQ==/">
                <img className='rounded-xl object-center' src={logoUdemy} alt="" /> </a></div>
                <div className='text-center text-white bg-zinc-900 rounded-xl w-32 hover:bg-zinc-600 duration-700 p-1'><button onClick={() => setModal2(true)}>Certificado</button> </div>
                
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-center'>React: De cero a experto <br /> <span className='autor-curso'> Fernando Herrera</span></h3>
                <div className='h-36 mt-8 mx-16 w-52 hover:w-60 duration-1000'><a target="_blank" href="https://www.udemy.com/share/103dum3@1ysJJwg-WrC3cZGdR8JIoHHPQHUTiOdev6WF8DtUkr1cnxHMdDyW2aToA6D6qn0ohw==/"> 
                <img className='rounded-xl object-center' src={logoUdemy} alt="" /></a>
                </div>
                <div className='text-center text-white bg-zinc-900 rounded-xl w-32 hover:bg-zinc-600 duration-700 p-1'><button onClick={() => setModal3(true)}>Certificado</button> </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-center'>Javascript moderno <br /> <span className='autor-curso'>Juan Pablo De la torre</span></h3>
                <div className='h-36 mt-8 mx-16 w-52 hover:w-60 duration-1000'><a target="_blank" href="https://www.udemy.com/share/1020Na3@oiAdVO2oWaN8b6fEYpeCxsyGaB8UD6Dey7st0ZjANJhG6YnyizbFd4S-wjFqSD8XvQ==/"> 
                <img className='rounded-xl object-center' src={logoUdemy} alt="" /> </a></div>
                <div className='text-center text-white bg-zinc-900 rounded-xl w-32 hover:bg-zinc-600 duration-700 p-1'><button onClick={() => setModal4(true)}>Certificado</button> </div>
            </div>
        </div>
        
    </div>
  )
}

export default Certificados