import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import video from '../assets/video.mp4'

import banner from '../assets/banner/banner.webp'

import hero1 from '../assets/hero/hero1.webp'
import hero2 from '../assets/hero/hero2.webp'
import hero3 from '../assets/hero/hero3.webp'
import hero4 from '../assets/hero/hero4.webp'
import { Footer } from '../components/Footer'


const HomePage = () => {
  return (
    <div className=''>
      <Header />
      <hr />

      {/* Hero */}
      <div className='flex flex-col items-center bg-gradient-to-r from-bg to-purple-800 text-white'>
        <h1 className="hidden">
          {`Derechos con Dignidad`}
        </h1>

        <img src={banner} alt="Banner sobre la donación segura" className='w-full max-w-5xl rounded-lg shadow-lg shadow-purple-900/30 mb-8' loading="lazy" />

          <NavLink to='/maps'>
          <button className='bg-orange-400 hover:bg-orange-500 duration-300 hover:scale-110 text-white font-bold py-2 px-6 mb-4 lg:mb-10 rounded-lg text-sm sm:text-base'>
            Puntos de donación
          </button>
        </NavLink>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24'>
          <img src={hero1} alt="Hero 1" />
          <img src={hero2} alt="Hero 2" />
          <img src={hero3} alt="Hero 3" />
          <img src={hero4} alt="Hero 4" />
        </div>

          <NavLink to='/maps'>
          <button className='bg-orange-400 hover:bg-orange-500 duration-300 hover:scale-110 text-white font-bold py-2 px-6 mb-4 lg:mb-10 rounded-lg text-sm sm:text-base'>
            Puntos de donación
          </button>
        </NavLink>

        {/* Texto principal */}
        <div className='w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-8 space-y-4 text-left md:text-justify text-base sm:text-lg md:text-xl leading-relaxed'>
          <p>
            {`Entregar donaciones en la vía pública es peligroso. Puedes ponerte en contacto con las comunidades aledañas para que tú mismo entregues tus donaciones en un lugar seguro. Cuida tu integridad y la de los demás.`}
          </p>

          <p className='font-semibold text-orange-300 mt-3 sm:mt-4'>
            Evita multas y contravenciones
          </p>

          <p className='font-semibold tracking-wide mt-1'>
            {`CÓDIGO ORGÁNICO INTEGRAL PENAL (COIP)`}
          </p>

          <p className='text-xs sm:text-sm md:text-base opacity-90'>
            <span className='font-semibold'>ART. 388.- Contravenciones de tránsito de tercera clase.</span> Serán sancionados con multa equivalente al cuarenta por ciento de un salario básico unificado del trabajador en general y reducción de siete punto cinco puntos en su licencia de conducir.
          </p>

          <p className='text-xs sm:text-sm md:text-base opacity-90'>
            1. La o el conductor que detengan o estacionen vehículos en sitios o zonas que entrañen peligro, tales como: zonas de seguridad, curvas, puentes, ingresos y salidas de los mismos, túneles, así como el ingreso y salida de estos, zonas estrechas, de poca visibilidad, cruces de caminos, cambios de rasante, pendientes, o pasos a desnivel, sin tomar las medidas de seguridad señaladas en los reglamentos.
          </p>

          <p className='text-xs sm:text-sm md:text-base opacity-90'>
            <span className='font-semibold'>Art. 390.- Contravenciones de tránsito de quinta clase.</span> Será sancionado con multa equivalente al quince por ciento de un salario básico unificado del trabajador en general y reducción de cuatro punto cinco puntos en su licencia de conducir.
          </p>

          <p className='text-xs sm:text-sm md:text-base opacity-90 pb-2'>
            8. La o el conductor que estacione un vehículo automotor en cualquier tipo de vías, sin tomar las precauciones reglamentariamente previstas para evitar un accidente de tránsito o lo deje abandonado en la vía pública.
          </p>
        </div>

        {/* Video + lista de donaciones */}
        <div className='w-full max-w-5xl px-4 sm:px-6 md:px-10 mb-8'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
            {/* Video */}
        <div className='w-full flex justify-center lg:justify-end'>
    <div className='relative w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] xl:w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10 bg-black/40'>
        <video
            controls
            src={video}
            className='w-full h-full object-contain max-h-[520px] sm:max-h-[580px] md:max-h-[640px] bg-black'
            preload="auto" 
            autoPlay
            muted
        />
    </div>
</div>

            {/* Lista donaciones */}
            <div className='w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-4'>
              <p className='text-2xl sm:text-3xl lg:text-3xl font-bold mb-3 md:mb-4 text-center lg:text-left'>
                {`¿Qué se puede donar?`}
              </p>
              <ul className='list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl'>
                <li>Alimentos no perecibles.</li>
                <li>Ropa y juguetes nuevos o en buen estado.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botón y footer */}
        <NavLink to='/maps'>
          <button className='bg-orange-400 hover:bg-orange-500 duration-300 hover:scale-110 text-white font-bold py-2 px-6 mb-4 lg:mb-10 rounded-lg text-sm sm:text-base'>
            Puntos de donación
          </button>
        </NavLink>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage