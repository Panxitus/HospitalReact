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
        <div>
            {Doctores.map((doctor) => (
            <div className="card-container">        
                <div className="card-doctors" key={doctor.id}>
                    <img src={doctor.img} alt={doctor.img} />
                    <h2>{doctor.Nombre}</h2>
                    <h2>{doctor.Apellido}</h2>
                    <p>{doctor.Especialidad}</p>
                    <div className="card-button">
                    <button>Agendar hora</button> 
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};
export default Doctores