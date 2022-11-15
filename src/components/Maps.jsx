import React, { useContext, useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { PlaceContext } from '../contextPlaceContext'




const Maps = () => {

  const mapRef = useRef();

  const { places, position } = useContext(PlaceContext)


  const ChangeCenter = (coords) => {
    const map = useMap();
    map.setView((coords.coords), 14);

  }


  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '90vh', width: "100%" }}
      ref={mapRef}

    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {places?.map(place => {
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


      <ChangeCenter coords={position} />

    </MapContainer>
  )
}

export default Maps