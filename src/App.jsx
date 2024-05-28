
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Service3 from './components/Service3'
import ProfessionalServicePage from './components/Professional'
import Service4 from './components/Service4'
import HomePage from './Pages/Home'
import NavBar from './components/NavBar'




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}/> 
      <Route path="/service1" element={<Service1 />}/>
      <Route path="/service2" element={<Service2 />}/>
      <Route path="/service3" element={<Service3 />}/>
      <Route path="/service4" element={<Service4 />}/>
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
