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

    return Doctores.map((doctor) => {
        return (
            <div>
                <img src={doctor.img} alt={doctor.nombre}/>
                <h2>{doctor.nombre}</h2>
                <p>{doctor.descripcion}</p>
            </div>
        )
    })
  
};
export default Doctores