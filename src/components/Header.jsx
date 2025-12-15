import { useContext, useEffect, useState, useCallback, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import logoMiess2 from '../assets/Logo_ENEC.png'

import logo from '../assets/logos/logo.svg'

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
    <header className='flex flex-col md:flex-row justify-between items-stretch bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200/30'  id="main-header">

      {/* Logos - Alineados a la izquierda */}


      <div className="flex items-center justify-between w-full gap-2 md:gap-4 px-3 md:px-4">
        <div className='flex items-center justify-center gap-1 md:gap-2'>
        <NavLink to={'/'} className="transition-all duration-300 hover:scale-110 hover:brightness-110" aria-label="Inicio">
          <img className='p-2 md:p-3 drop-shadow-md' width={140} height={70} src={logo} alt="Logo MIESS 1" loading="lazy" />
        </NavLink>

        <NavLink
  to="/"
  aria-label="Inicio"
  className="transition-all duration-300 hover:scale-110"
>
  <img
    src={logoMiess2}
    alt="Logo MIESS 2"
    loading="lazy"
    width={140}
    height={70}
    className="
      p-2 md:p-3
      filter
      transition-all duration-300
      hover:drop-shadow-[0_8px_12px_rgba(0,0,0,0.35)]
    "
  />
</NavLink>

        </div>

        <NavLink to={'/more'} className={`transition-all duration-300 hover:scale-110 ${ isMapPage && 'hidden'}`} aria-label="Más información">
          <span className='text-sm md:text-base font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hover:from-orange-500 hover:to-orange-600 px-3 md:px-4 py-2 rounded-lg transition-all duration-300'>Conoce más</span>
        </NavLink>
      </div>

      {/* Slider de lugares - Ocupa todo el espacio disponible */}
      {isMapPage && (
        <div className='lg:w-4/5 md:flex-1 flex items-center px-2 md:px-4 md:ml-4 bg-gradient-to-r from-purple-50 to-white/50'>
          <div className='relative w-full'>
            {/* Gradiente izquierdo */}
            <div className='absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden lg:block' />
            
            {/* Contenedor del slider */}
            <div 
              ref={sliderRef}
              className='flex flex-row items-center overflow-x-auto no-scrollbar py-3 scroll-smooth snap-x snap-mandatory'
              role="list"
              aria-label="Lista de lugares"
            >
              {places.map(place => (
                <Info key={place.name} name={place.name} location={place.location} />
              ))}
            </div>
            
            {/* Gradiente derecho */}
            <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none hidden lg:block' />
          </div>
          
          {/* Indicador de scroll para móvil */}
          <div className='flex justify-center md:hidden' aria-hidden="true">
            <div className='flex gap-1.5 pb-1.5'>
              <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-sm' />
              <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-75 shadow-sm' />
              <div className='w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-150 shadow-sm' />
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header