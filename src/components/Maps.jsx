import React, { useContext, useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { PlaceContext } from '../contextPlaceContext'

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'


const icon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow
});

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
            icon={icon}
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