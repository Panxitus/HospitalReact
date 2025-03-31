import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/pages/Home/Homepage'
import Nosotrospage from './Components/pages/Home/Nosotrospage'
import Servicepage from './Components/pages/Home/Servicepage'
import Contactopage from './Components/pages/Home/Contactopage'



function App() {
  return (
   <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/contact" element={<Contactopage/>}/>
      <Route path="/about" element={<Nosotrospage/>}/>
      <Route path="/service" element={<Servicepage/>}/>
   </Routes>   
  )
}

export default App
