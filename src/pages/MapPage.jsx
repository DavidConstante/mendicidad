import React from 'react'
import Maps from '../components/Maps'
import Header from '../components/Header'
import 'animate.css';


const MapPage = () => {

  return (
    <div className=''>
      <Header />
      <hr />

      <div className='animate__animated animate__fadeIn'>

        <Maps >
        </Maps>


      </div>
    </div >
  )
}

export default MapPage