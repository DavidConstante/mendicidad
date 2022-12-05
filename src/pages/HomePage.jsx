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
      <div className='flex flex-col items-center bg-bg text-white'>
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
            <p className='text-2xl m-4'>{`¿Qué? se puede donar`}</p>
            <ul class="list-disc">
              <li>Alimentos no perecibles.</li>
              <li>Ropa y juguetes nuevos o en buen estado.</li>
            </ul>
          </div>

        </div>


        <NavLink to='/maps'>
          <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-4 lg:my-12 rounded-lg'      >
            Puntos de Recolección
          </button>

        </NavLink>


      </div>


    </div>

  )
}

export default HomePage