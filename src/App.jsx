import 'leaflet/dist/leaflet.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'

//? Deployed on https://app.netlify.com/teams/davidconstante/projects

function App() {


  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maps" element={<MapPage />} />
      </Routes>
    </div>
  )
}

export default App
