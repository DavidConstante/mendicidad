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
      <div className='flex flex-col items-center bg-gradient-to-br from-bg via-purple-700 to-purple-900 text-white'>
        <h1 className="hidden">
          {`Derechos con Dignidad`}
        </h1>

        <img 
          src={banner} 
          alt="Banner sobre la donación segura" 
          className='w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 rounded-2xl shadow-2xl shadow-purple-900/50 mb-6 sm:mb-8 md:mb-10 transition-transform hover:scale-[1.02] duration-500' 
          loading="lazy" 
        />

        <NavLink to='/maps' className='mb-6 sm:mb-8 md:mb-10'>
          <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-600/50 transition-all duration-300 hover:scale-110 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base md:text-lg tracking-wide'>
            📍 Puntos de donación
          </button>
        </NavLink>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 w-full max-w-7xl'>
          <img src={hero1} alt="Hero 1" className='rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 w-full h-auto object-cover' loading="lazy" />
          <img src={hero2} alt="Hero 2" className='rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 w-full h-auto object-cover' loading="lazy" />
          <img src={hero3} alt="Hero 3" className='rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 w-full h-auto object-cover' loading="lazy" />
          <img src={hero4} alt="Hero 4" className='rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 w-full h-auto object-cover' loading="lazy" />
        </div>

        <NavLink to='/maps' className='mb-8 sm:mb-10 md:mb-12'>
          <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-600/50 transition-all duration-300 hover:scale-110 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base md:text-lg tracking-wide'>
            📍 Puntos de donación
          </button>
        </NavLink>

        {/* Texto principal */}
        <div className='w-full max-w-6xl px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-10 sm:pb-12 md:pb-16 space-y-5 sm:space-y-6 text-left md:text-justify'>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl'>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-white/95'>
              {`Entregar donaciones en la vía pública es peligroso. Puedes ponerte en contacto con las comunidades aledañas para que tú mismo entregues tus donaciones en un lugar seguro. Cuida tu integridad y la de los demás.`}
            </p>
          </div>

          <div className='bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-400/30 shadow-2xl'>
            <p className='font-bold text-orange-300 text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6'>
              ⚠️ Evita multas y contravenciones
            </p>

            <p className='font-bold tracking-wide text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 text-white'>
              {`CÓDIGO ORGÁNICO INTEGRAL PENAL (COIP)`}
            </p>

            <div className='space-y-4 sm:space-y-5'>
              <div className='bg-white/5 rounded-xl p-4 sm:p-5 md:p-6'>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                  <span className='font-bold text-orange-200'>ART. 388.- Contravenciones de tránsito de tercera clase.</span> Serán sancionados con multa equivalente al cuarenta por ciento de un salario básico unificado del trabajador en general y reducción de siete punto cinco puntos en su licencia de conducir.
                </p>
              </div>

              <div className='bg-white/5 rounded-xl p-4 sm:p-5 md:p-6'>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                  1. La o el conductor que detengan o estacionen vehículos en sitios o zonas que entrañen peligro, tales como: zonas de seguridad, curvas, puentes, ingresos y salidas de los mismos, túneles, así como el ingreso y salida de estos, zonas estrechas, de poca visibilidad, cruces de caminos, cambios de rasante, pendientes, o pasos a desnivel, sin tomar las medidas de seguridad señaladas en los reglamentos.
                </p>
              </div>

              <div className='bg-white/5 rounded-xl p-4 sm:p-5 md:p-6'>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                  <span className='font-bold text-orange-200'>Art. 390.- Contravenciones de tránsito de quinta clase.</span> Será sancionado con multa equivalente al quince por ciento de un salario básico unificado del trabajador en general y reducción de cuatro punto cinco puntos en su licencia de conducir.
                </p>
              </div>

              <div className='bg-white/5 rounded-xl p-4 sm:p-5 md:p-6'>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                  8. La o el conductor que estacione un vehículo automotor en cualquier tipo de vías, sin tomar las precauciones reglamentariamente previstas para evitar un accidente de tránsito o lo deje abandonado en la vía pública.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video + lista de donaciones */}
        <div className='w-full max-w-6xl px-4 sm:px-6 md:px-10 mb-10 sm:mb-12 md:mb-16'>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16'>
            {/* Video */}
            <div className='w-full lg:w-1/2 flex justify-center'>
              <div className='relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/60 border-2 border-white/20 bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm hover:scale-105 transition-transform duration-500'>
                <video
                  controls
                  src={video}
                  className='w-full h-full object-contain bg-black'
                  preload="auto" 
                  autoPlay
                  muted
                />
              </div>
            </div>

            {/* Lista donaciones */}
            <div className='w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl'>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 md:mb-6 text-center lg:text-left bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent'>
                {`¿Qué se puede donar?`}
              </p>
              <ul className='space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl'>
                <li className='flex items-start gap-3 hover:translate-x-2 transition-transform duration-300'>
                  <span className='text-orange-400 text-2xl flex-shrink-0'>✓</span>
                  <span>Alimentos no perecibles.</span>
                </li>
                <li className='flex items-start gap-3 hover:translate-x-2 transition-transform duration-300'>
                  <span className='text-orange-400 text-2xl flex-shrink-0'>✓</span>
                  <span>Ropa y juguetes nuevos o en buen estado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botón y footer */}
        <NavLink to='/maps' className='mb-10 sm:mb-12 md:mb-16'>
          <button className='bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-600/50 transition-all duration-300 hover:scale-110 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base md:text-lg tracking-wide'>
            📍 Puntos de donación
          </button>
        </NavLink>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage