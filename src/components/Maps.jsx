import React from 'react'
import GoogleMaps from 'simple-react-google-maps'

const Maps = ({ heightTitle }) => {
  const height = window.innerHeight - 2 * heightTitle;

  return (
    <div>
      <GoogleMaps
        apiKey={"AIzaSyBF5h9sRsuxqoz_Qk0SyLy5dx26In6YqZQ"}
        style={{ height: height, width: "100%" }}
        zoom={6}
        center={{ lat: 37.4224764, lng: -122.0842499 }}
        markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
      />
    </div>
  )
}

export default Maps