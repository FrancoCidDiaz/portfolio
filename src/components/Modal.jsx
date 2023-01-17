import React from 'react'


const Modal = ({certificado, setModal1,  setModal2, setModal3, setModal4}) => {


const cerrarModal = () => {
if(certificado.includes("certificado1")){
    setModal1(false)
}
else if(certificado.includes("certificado2")){
    setModal2(false)
}
else if(certificado.includes("certificado3")){
    setModal3(false)
}
else if(certificado.includes("certificado4")){
    setModal4(false)
}
return


}



  return (
    
    <div onClick={() => cerrarModal() }  className='w-full flex flex-col justify-center contenedor-certificado rounded-xl'>
        <div className='flex justify-between cabecera-certificado'>
        <h1 className='text-3xl text-white'>Certificado</h1>
        <div onClick={() => cerrarModal() } >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>

        </div>
        <img className='certificado rounded-xl' src={certificado} alt="" />
    </div>
  )
}

export default Modal