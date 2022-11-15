import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


const places = [
  {
    name: "Unbicacion 0",
    address: 'Gad Pastocalle',
    location: [-0.7274739684376812, -78.63470460736725],
    manager: 'Nancy Iza',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Mies Latacunga",
    address: 'Fernando Sanches de Orellana y Luis Fernando Ruiz ',
    location: [-0.9455356948370244, -78.61183537717544],
    manager: 'Patricia Procel',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Parque Simon Bolivar",
    address: 'Quito y General Maldonado',
    location: [-0.9336199991941051, -78.61504800015588],
    manager: 'Celimo Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Parque Nautico",
    address: 'Av. Rumiñahui y Santiago Zamora',
    location: {
      lat: -0.937762466578477,
      lng: -78.60733975756742
    },
    manager: 'David Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
]

const Maps = () => {

  const position = [-0.9455356948370244, -78.61183537717544]


  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '90vh', width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {places.map(place => {
        return (
          <Marker
            key={place.name}
            position={place.location}
          >
            <Popup>
              <p>{place.name}</p>
              <p>{place.address}</p>
              <p>{place.manager}</p>
              <p>{place.phone}</p>
              <p>{place.schedule}</p>
              <a className='bg-blue-200 p-2 rounded-md' href={`https://www.google.com/maps/dir//${place.location[0]},${place.location[1]}`} target="_blank">¿Cómo Llegar?</a>

            </Popup>
          </Marker>
        )
      })}



    </MapContainer>
  )
}

export default Maps