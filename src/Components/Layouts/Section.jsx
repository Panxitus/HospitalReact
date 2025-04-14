import vanguardia from '../../assets/img/vanguardia.jpg';
import convenios from '../../assets/img/convenios.jpeg';
import informate from '../../assets/img/informate.webp';
import especialidades from '../../assets/img/Especialidades.jpg';
import pacientes from '../../assets/img/pacientes.webp';
const Section = () => {
  return (
    <section className='container_section'>
        
        <div className='section_information'>
            <h3>Medicina de vanguardia</h3>
            <p>Los mejores equipamientos </p>
            <img src={vanguardia} alt="vaguardia" />
        </div>
        <div className='section_information'>
            <h3>Informate</h3>
            <p>la mejor medicina del País</p>
            <img src={informate} alt="informate" />
        </div>
        <div className='section_information'>
            <h3>Convenios y seguros </h3>
            <p>Convenios abieros y cerrados </p>
            <img src={convenios} alt="convenios"/>
        </div>
        <div className='section_information'>
            <h3>Especialidades Medicas </h3>
            <p>Las mejoras Especialidades </p>
            <img src={especialidades} alt="convenios"/>
        </div>  
        <div className='section_information'>
            <h3> Testimonios</h3>
            <p> Nuestros pacientes</p>
            <img src={pacientes} alt="convenios"/>
        </div> 
    </section>
  )
}

export default Section