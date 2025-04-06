import Doctores from "../../Layouts/Doctores"
import Footer from "../../Layouts/Footer"
import Navbar from "../../Layouts/Navbar"

const Doctorpage = () => {
  return (
    <>
     <Navbar/>
     <div className="card-container">
     <Doctores/>
     </div>
     <Footer/>
    </>
  )
}

export default Doctorpage