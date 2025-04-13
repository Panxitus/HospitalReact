import React from 'react'

const contacto = () => {
  return (
    <section className='container_contacto'>
        <form>
            <h2>Formulario de contacto</h2>
            <div className='input-box'>
                <label>Nombre completo</label>
                <input type='text' className='field' placeholder='Ingrese su nombre'required/> 
            </div>
            <div className='input-box'>
                <label>Correo Electronico</label>
                <input type='text' className='field' placeholder='Ingrese su correo'required/> 
            </div>    
            <div className='input-box'>
                <label>mensaje</label>
                <textarea name="" id='' className='field mess' placeholder='Escriba su mensaje'/> 
            </div>
            <button type='submit'>Enviar Mensaje</button>
        </form>
    </section>
  )
}

export default contacto