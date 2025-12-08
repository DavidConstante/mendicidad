import { useContext, useEffect, useState, useCallback, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import logoMiess1 from '../assets/logo1.webp'
import logoMiess2 from '../assets/Logo_ENEC.png'

import { PlaceContext } from '../contextPlaceContext'
import Info from './Info'



const Header = () => {

  const { position, places } = useContext(PlaceContext)
  const location = useLocation()
  const sliderRef = useRef(null)
  
  // Usar useLocation de react-router en lugar de window.location
  const isMapPage = location.pathname === '/maps'

  // Auto-scroll al elemento activo cuando cambia la posición
  useEffect(() => {
    if (!isMapPage || !sliderRef.current) return

    const activeIndex = places.findIndex(
      place => JSON.stringify(place.location) === JSON.stringify(position)
    )

    if (activeIndex !== -1 && sliderRef.current) {
      const slider = sliderRef.current
      const cards = slider.children
      const activeCard = cards[activeIndex]
      
      if (activeCard) {
        // Scroll suave al elemento activo
        const scrollLeft = activeCard.offsetLeft - (slider.offsetWidth / 2) + (activeCard.offsetWidth / 2)
        slider.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
    }
  }, [position, places, isMapPage])


  return (
    <header className='flex flex-col md:flex-row justify-between items-stretch bg-white shadow-sm' id="main-header">

      {/* Logos - Alineados a la izquierda */}
      <div className="flex justify-around md:justify-start items-center w-full md:w-auto gap-2 md:gap-4 flex-shrink-0 px-2 md:px-0">
        <NavLink to={'/'} className="transition-transform hover:scale-105" aria-label="Inicio">
          <img className='p-2 md:p-3' width={140} height={70} src={logoMiess1} alt="Logo MIESS 1" loading="lazy" />
        </NavLink>

        <NavLink to={'/'} className="transition-transform hover:scale-105" aria-label="Inicio">
          <img className='p-2 md:p-3' width={140} height={70} src={logoMiess2} alt="Logo MIESS 2" loading="lazy" />
        </NavLink>
      </div>

      {/* Slider de lugares - Ocupa todo el espacio disponible */}
      {isMapPage && (
        <div className='w-full md:flex-1 flex items-center px-2 md:px-4 md:ml-4'>
          <div className='relative w-full'>
            {/* Gradiente izquierdo */}
            <div className='absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden lg:block' />
            
            {/* Contenedor del slider */}
            <div 
              ref={sliderRef}
              className='flex flex-row items-center overflow-x-auto no-scrollbar py-2 scroll-smooth snap-x snap-mandatory'
              role="list"
              aria-label="Lista de lugares"
            >
              {places.map(place => (
                <Info key={place.name} name={place.name} location={place.location} />
              ))}
            </div>
            
            {/* Gradiente derecho */}
            <div className='absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden lg:block' />
          </div>
          
          {/* Indicador de scroll para móvil */}
          <div className='flex justify-center md:hidden' aria-hidden="true">
            <div className='flex gap-1 pb-1'>
              <div className='w-1 h-1 bg-gray-300 rounded-full animate-pulse' />
              <div className='w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-75' />
              <div className='w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-150' />
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header