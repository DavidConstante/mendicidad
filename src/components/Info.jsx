import PlaceIcon from '@mui/icons-material/Place';
import { PlaceContext } from '../contextPlaceContext';
import { useContext, useState, useMemo, useCallback } from 'react';

const Info = ({ name, location }) => {

  const { changeFocus, position } = useContext(PlaceContext)
  const [isHovered, setIsHovered] = useState(false)
  
  // Verificar si esta tarjeta está activa (memoizado para mejor performance)
  const isActive = useMemo(
    () => JSON.stringify(position) === JSON.stringify(location),
    [position, location]
  )

  // Callbacks memoizados para evitar recreación
  const handleClick = useCallback(() => {
    changeFocus(location)
  }, [changeFocus, location])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div className='px-1.5 flex-shrink-0 snap-start' role="listitem">
      <button
        className={`
          relative overflow-hidden rounded-xl p-3 my-2 
          min-w-[160px] sm:min-w-[180px] md:min-w-[200px]
          w-40 sm:w-48 md:w-52
          flex items-center gap-2 
          transition-all duration-300 ease-in-out
          shadow-md hover:shadow-xl
          transform hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${isActive 
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-2 ring-blue-400 ring-offset-2' 
            : 'bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 text-gray-800'
          }
        `}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Ir a ${name}`}
        aria-pressed={isActive}
        type="button"
      >
        {/* Efecto de fondo animado */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0
          transition-opacity duration-300
          ${isHovered && !isActive ? 'opacity-10' : ''}
        `} />
        
        {/* Icono */}
        <div className={`
          flex-shrink-0 transition-transform duration-300
          ${isHovered ? 'scale-110 rotate-12' : ''}
        `}>
          <PlaceIcon 
            sx={{ 
              fontSize: { xs: 22, sm: 24 },
              color: isActive ? 'white' : '#2563eb',
              filter: isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none'
            }} 
          />
        </div>
        
        {/* Texto */}
        <span className={`
          relative z-10 text-xs sm:text-sm font-semibold text-left flex-1 line-clamp-2
          ${isActive ? 'text-white' : 'text-gray-800'}
        `}>
          {name}
        </span>
        
        {/* Indicador activo */}
        {isActive && (
          <div className="absolute top-1 right-1" aria-hidden="true">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        )}
      </button>
    </div>
  )
}

export default Info