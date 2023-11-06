import React from 'react'
import { NavLink } from 'react-router-dom'
import wallpaper from '../assets/wallpaper.jpg'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div >
      {/* Header */}
      <Header />
      <hr />

      {/* Hero */}
      <div className='flex flex-col items-center bg-gradient-to-r from-bg to-purple-800 text-white'>
        <h1 className="mx-8 my-8 text-3xl md:text-4xl lg:text-7xl text-center font-bold  ">
          {`Solidaridad sin Mendicidad`}
        </h1>


        <p className='px-8 text-xl text-justify lg:w-4/5' >
          {`Entregar donaciones en la vía pública es preligroso, puedes ponerte en contacto con las comunidades aledañas para que tú mismo entregues tus donaciones en un lugar seguro. Cuida tu integridad y la de los demás.`}
        </p>




        <div className='static flex flex-col items-center lg:flex-row justify-center m-4 '>

          <img
            className=' w-full lg:w-2/4 border-2 border-white rounded-xl'
            src={wallpaper}
            alt=""
          />
          <div className='m-8'>
            <p className='text-2xl lg:text-4xl m-4 font-bold'>{`¿Qué se puede donar?`}</p>
            <h3 class="list-disc text-xl lg:text-2xl">
              <h2>Alimentos no perecibles.</h2>
              <h2>Ropa y juguetes nuevos o en buen estado.</h2>
            </h3>
          </div>

        </div>


        <NavLink to='/maps'>
          <button className='bg-orange-400 hover:bg-orange-500 duration-500 hover:scale-125 text-white font-bold py-2 px-4 mb-4 lg:my-10 rounded-lg'      >
            Puntos de donación
          </button>

        </NavLink>

        <p className='text-slate-300 w-full text-center'>
          copyright © 2022 - David Constante
        </p>

      </div>


    </div>

  )
}

export default HomePage