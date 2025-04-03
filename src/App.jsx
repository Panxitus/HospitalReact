import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/pages/Home/Homepage'
import Nosotrospage from './Components/pages/Home/Nosotrospage'
import Doctorpage from './Components/pages/Home/Doctorpage'
import Contactopage from './Components/pages/Home/Contactopage'



function App() {
  return (
   <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/contact" element={<Contactopage/>}/>
      <Route path="/about" element={<Nosotrospage/>}/>
      <Route path="/doctors" element={<Doctorpage/>}/>
   </Routes>   
  )
}

export default App
