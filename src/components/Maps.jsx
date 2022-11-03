import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'




const Maps = ({ heightTitle }) => {
  const height = window.innerHeight - 2 * heightTitle;
  const position = [-0.9339756083425039, -78.6145568742513]

  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          // setPosition(marker.getLatLng())
          console.log(marker.getLatLng())
        }
      },
    }),
    [],
  )
  useEffect(() => {
    // you will get the current position of the marker here
    console.log(markerRef.current)
  }, [markerRef.current])

  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: '90vh', width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        eventHandlers={eventHandlers}
        position={position}
        draggable={true}
        animate={true}
        ref={markerRef}
      >
        <Popup>
          Hey ! you found me
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Maps