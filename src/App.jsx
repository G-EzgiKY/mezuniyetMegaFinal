import { useState } from 'react'
import Navbar from './companents/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kurumsal from './pages/Kurumsal'
import Hizmett from './pages/Hizmett'
import Baskan from './pages/Baskan'
import Proje from './pages/Proje'
import Meram from './pages/Meram'
import Iletisim from './pages/Iletisim'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />

      <div className='container'>

        <div>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Kurumsal />} />
            <Route path="/hizmett" element={<Hizmett />} />
            <Route path="/baskan" element={<Baskan />} />
            <Route path="/proje" element={<Proje />} />
            <Route path="/meram" element={<Meram />} />
            <Route path="/iletisim" element={<Iletisim />} />




          </Routes>
        </div>



      </div>


    </>
  )
}

export default App
