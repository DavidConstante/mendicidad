import React, { useContext, useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { PlaceContext } from '../contextPlaceContext'


import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { Alert, AlertTitle } from '@mui/material'


const blueIcon = L.icon({
  iconUrl: iconMarker,
  // iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



const Maps = () => {

  const { places, position } = useContext(PlaceContext)
  const mapRef = useRef();
  let zoom = 13;
  const [alert, setAlert] = useState(true)


  const ChangeCenter = (coords) => {
    const map = useMap();
    JSON.stringify(position) === JSON.stringify([-0.67167, -78.59491]) ? zoom = 13 : zoom = 15
    map.setView((coords.coords), zoom);
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 4000);
  }, [])


  return (
    <>
      <MapContainer
        center={position}
        // zoom={13}
        scrollWheelZoom={true}
        style={{ height: '89vh', width: "100%" }}
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
              icon={blueIcon}

            >
              <Popup>
                <p>{place.name}</p>
                {/* <p>{place.address}</p> */}
                <p>{`${place.manager} - ${place.phone}`}</p>
                <p>{`${place.manager2} - ${place.phone2}`}</p>
                <p>{place.schedule}</p>
                <a className='bg-blue-200 p-2 rounded-md' href={`https://www.google.com/maps/dir//${place.location[0]},${place.location[1]}`} target="_blank">¿Cómo Llegar?</a>

              </Popup>
            </Marker>
          )
        })}


        <ChangeCenter coords={position} />

      </MapContainer>

      <div
        className={alert ? '' : 'hidden'}
      >

        <Alert
          className={`absolute z-10 top-0  right-0  m-1 w-4/6 lg:w-1/2 lg:m-4`}
          onClick={() => setAlert(false)}
          severity="info"
          variant='filled'
        >
          Toca uno de los puntos marcados para saber con quien contactarte.
        </Alert>
      </div>
    </>
  )
}

export default Maps