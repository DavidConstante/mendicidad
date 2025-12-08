import React, { useContext, useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { PlaceContext } from '../contextPlaceContext'


import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { Alert, AlertTitle } from '@mui/material'

// Constantes globales (fuera del componente para evitar recreación)
const INITIAL_POSITION = [-0.67167, -78.59491]
const DEFAULT_ZOOM = 13
const FOCUSED_ZOOM = 15
const ALERT_DURATION = 5000

const blueIcon = L.icon({
  iconUrl: iconMarker,
  // iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



// Componente para cambiar el centro del mapa
const ChangeCenter = ({ coords, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    if (coords && Array.isArray(coords) && coords.length === 2) {
      map.setView(coords, zoom);
    }
  }, [coords, zoom, map]);
  
  return null;
}

// Componente para el contenido del popup (memoizado)
const PopupContent = React.memo(({ place }) => (
  <div className="p-2 space-y-3">
    {/* Título del lugar */}
    <div className="border-b-2 border-blue-500 pb-2">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {place.name}
      </h3>
    </div>

    {/* Información de contacto */}
    <div className="space-y-2">
      {place.manager && place.phone && (
        <div className="bg-blue-50 p-2 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">Responsable 1:</p>
          <p className="text-sm font-medium text-gray-800">{place.manager}</p>
          <a 
            href={`tel:${place.phone}`}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1 transition-colors"
            aria-label={`Llamar a ${place.manager}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {place.phone}
          </a>
        </div>
      )}

      {place.manager2 && place.phone2 && (
        <div className="bg-green-50 p-2 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">Responsable 2:</p>
          <p className="text-sm font-medium text-gray-800">{place.manager2}</p>
          <a 
            href={`tel:${place.phone2}`}
            className="text-sm text-green-600 hover:text-green-800 flex items-center gap-1 mt-1 transition-colors"
            aria-label={`Llamar a ${place.manager2}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {place.phone2}
          </a>
        </div>
      )}

      {/* Horario */}
      {place.schedule && (
        <div className="bg-gray-50 p-2 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Horario:
          </p>
          <p className="text-sm text-gray-700">{place.schedule}</p>
        </div>
      )}
    </div>

    {/* Botón de direcciones */}
    <a 
      className='block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2' 
      href={`https://www.google.com/maps/dir//${place.location[0]},${place.location[1]}`} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver direcciones a ${place.name} en Google Maps`}
    >
      <span className="flex items-center justify-center gap-2 text-white">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        ¿Cómo Llegar?
      </span>
    </a>
  </div>
))

PopupContent.displayName = 'PopupContent'

const Maps = () => {

  const { places, position } = useContext(PlaceContext)
  const mapRef = useRef();
  const [alert, setAlert] = useState(true)
  const [mapHeight, setMapHeight] = useState('100vh')

  // Calcular el zoom basado en la posición (memoizado)
  const currentZoom = useMemo(() => {
    return JSON.stringify(position) === JSON.stringify(INITIAL_POSITION) 
      ? DEFAULT_ZOOM 
      : FOCUSED_ZOOM
  }, [position])

  // Callback memoizado para cerrar alerta
  const handleCloseAlert = useCallback(() => {
    setAlert(false)
  }, [])

  // Calcular altura del mapa dinámicamente
  useEffect(() => {
    const calculateHeight = () => {
      // Buscar el header por id primero, luego por tag
      const header = document.getElementById('main-header') || document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      const hrHeight = 1 // altura del hr
      
      // Usar window.innerHeight para móviles (más preciso que vh)
      const viewportHeight = window.innerHeight
      const availableHeight = viewportHeight - headerHeight - hrHeight
      
      setMapHeight(`${availableHeight}px`)
    }

    // Calcular inmediatamente
    calculateHeight()
    
    // Calcular después de que las imágenes del header se carguen
    const timer = setTimeout(calculateHeight, 100)
    
    // Recalcular en eventos
    window.addEventListener('resize', calculateHeight)
    window.addEventListener('orientationchange', calculateHeight)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateHeight)
      window.removeEventListener('orientationchange', calculateHeight)
    }
  }, [])

  // Auto-cerrar alerta después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, ALERT_DURATION);
    
    return () => clearTimeout(timer);
  }, [])


  return (
    <>
      <MapContainer
        center={position}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: mapHeight, width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />

        {places?.map(place => (
          <Marker
            key={place.name}
            position={place.location}
            icon={blueIcon}
          >
            <Popup maxWidth={300} minWidth={250} closeButton={true}>
              <PopupContent place={place} />
            </Popup>
          </Marker>
        ))}

        <ChangeCenter coords={position} zoom={currentZoom} />

      </MapContainer>

      {/* Alerta informativa */}
      {alert && (
        <div className="absolute z-[1000] top-2 right-2 left-2 md:left-auto md:right-4 md:top-4 md:w-96 animate__animated animate__fadeInDown">
          <Alert
            onClose={handleCloseAlert}
            severity="info"
            variant='filled'
            className="shadow-lg"
            sx={{
              '& .MuiAlert-message': {
                width: '100%'
              },
              cursor: 'pointer'
            }}
            role="alert"
            aria-live="polite"
          >
            <AlertTitle className="font-bold">Información</AlertTitle>
            <p className="text-sm">
              Toca uno de los puntos marcados en el mapa para ver los detalles de contacto.
            </p>
          </Alert>
        </div>
      )}
    </>
  )
}

export default Maps