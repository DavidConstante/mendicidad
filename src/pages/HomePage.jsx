import React from 'react'
import { NavLink } from 'react-router-dom'
import logoMiess from '../assets/logoMiess.png'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div >
      {/* Header */}
      <Header />
      <hr />

      {/* Hero */}
      <div className='flex flex-col items-center'>
        <h1 className="mx-8 my-8 text-3xl md:text-4xl lg:text-7xl text-center font-bold  ">
          {`Mendicidad con Dignidad`}
        </h1>


        <p className='p-8 text-xl text-justify' >
          {`Entrega tus donativos en los puntos de recolección del Ministerio de Inlcusión Economica y Social, ubicados en las principales ciudades del cantón.`}
        </p>

        <img className='p-1' src="https://www.inclusion.gob.ec/wp-content/uploads/2017/11/1.jpg" alt="" />

        <NavLink to='/maps'>
          <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 my-12 rounded-lg'      >
            Puntos de Recolección
          </button>

        </NavLink>


      </div>


    </div>

  )
}

export default HomePage