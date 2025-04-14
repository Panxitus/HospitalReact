import { useState, useEffect} from "react";

const Doctores = () => {
    const [Doctores, setDoctores] = useState ([]);

    const getDoctores = async () =>{
        const response = await fetch("doctores.json")
        const data = await response.json()
        setDoctores(data);
    }
    
    useEffect(() => {
        getDoctores();
    }, []);
  
    return (
        <div  className="container_doctors" >
            {Doctores.map((doctor) => (
            <div className="card_doctors" key={doctor.id}>
                <img src={doctor.img} alt={doctor.img} />
                <h2>{doctor.Nombre}</h2>
                <h2>{doctor.Apellido}</h2>
                <p>{doctor.Especialidad}</p>
                <div className="card-button">
                    <button>Agendar hora</button> 
                </div>
            </div> 
            ))}
        </div>
    );
};
export default Doctores