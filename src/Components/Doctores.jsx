import { useState, useEffect} from "react";

const Doctores = () => {
    const [Doctores, setDoctores] = useState ([]);

    useEffect(() => {
        fetch("doctores.json")
       .then ((response) => response.json())
       .then((data) => setDoctores(data.doctores))
    },[])


return Doctores.map ((doctores) => {
    return (
        <div key={doctores.id}>    
             <img src={doctores.img} alt=""/>
             <h2>{doctores.nombre}</h2>
             <p>{doctores.apellido}</p>
             <p>{doctores.especialidad}</p>
             <button>Agendar Hora</button>
        </div>
      )
})
  
}
export default Doctores