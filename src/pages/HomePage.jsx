import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import video from '../assets/video.mp4'
const HomePage = () => {
  return (
    <div >
      {/* Header */}
      <Header />
      <hr />

      {/* Hero */}
      <div className='flex flex-col items-center bg-gradient-to-r from-bg to-purple-800 text-white'>
        <h1 className="mx-8 my-8 text-3xl md:text-4xl lg:text-7xl text-center font-bold  ">
          {`Derechos con Dignidad`}
        </h1>


        <p className='px-8 lg:px-0 text-xl text-justify lg:w-4/5' >
          {`Entregar donaciones en la vía pública es preligroso, puedes ponerte en contacto con las comunidades aledañas para que tú mismo entregues tus donaciones en un lugar seguro. Cuida tu integridad y la de los demás.`}
        </p>

        <br />
        <p className='px-8 lg:px-0 text-xl text-justify lg:w-4/5'>Evita multas y contravenciones</p>
        <br />
        <p className='px-8  lg:px-0 text-xl text-justify lg:w-4/5' >
          {`CÓDIGO ORGÁNICO INTEGRAL PENAL (COIP)`}
        </p>

        <p className='px-8 text-md text-justify lg:w-4/5'>ART. 388.- CONTRAVENCIONES DE TRÁNSITO DE TERCERA CLASE.- Serán sancionados con multa equivalente al cuarenta por ciento de un salario básico unificado del trabajador en general y reducción de siete punto cinco puntos en su licencia de conducir:</p>
        <p className='px-8 text-md text-justify lg:w-4/5'>1. La o el conductor que detengan o estacionen vehículos en sitios o zonas que entrañen peligro, tales como: zonas de seguridad, curvas, puentes, ingresos y salidas de los mismos, túneles, así como el ingreso y salida de estos, zonas estrechas, de poca visibilidad, cruces de caminos, cambios de rasante, pendientes, o pasos a desnivel, sin tomar las medidas de seguridad señaladas en los reglamentos.</p>




        <div className='static flex flex-col items-center lg:flex-row justify-center m-4 lg:w-4/5 '>


          <video controls className='w-3/5' src={video}></video>

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
          copyright © 2023 - David Constante
        </p>

      </div>


    </div>

  )
}

export default HomePage