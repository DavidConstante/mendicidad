import { createContext, useState } from "react";

const PlaceContext = createContext({})

const initialPosition = [-0.67167, -78.59491]

const places = [
  {
    name: "La Libertad",
    address: 'San Juan de Pastocalle',
    location: [-0.61663, -78.62918],
    manager: 'Mónica Chacha',
    phone: '0983643850',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Romerillos",
    address: 'San Juan de Pastocalle',
    location: [-0.6286, -78.60927],
    manager: 'Patricio Chicaiza',
    phone: '0995329855',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "San Bartolomé",
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Whashington Chicaiza',
    phone: '0989696607',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Cuilche Miño", //
    address: 'San Juan de Pastocalle',
    location: [-0.7239, -78.61971],
    manager: 'Blanca Marisol Hidalgo Toaquiza',
    phone: '0987569899',
    manager2: 'Angel Serafín Collaguazo Rivera',
    phone2: '0981258496',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },


  {
    name: "Cuilche Salas",//
    address: 'San Juan de Pastocalle',
    location: [-0.72388, -78.61035],
    manager: 'Luis Casa',
    phone: '0999001034',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },

  {
    name: "Comuna el Boliche", //
    address: 'San Juan de Pastocalle',
    location: [-0.7099878197330917, -78.60942388465583],
    manager: 'Blanca Caiza',
    phone: '0968169037',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Chasqui", // 
    address: 'San Juan de Pastocalle',
    location: [-0.7092960438032826, -78.59469715767207],
    manager: 'Mercedes Llano',
    phone: '0987011017',
    manager2: 'Luis Puco',
    phone2: '0995154192',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Santa Rita",//
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Jenny Masapanta',
    phone: '0999908177',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Mies",
    address: 'San Juan de Pastocalle',
    location: [-0.9455894369382848, -78.61187710055121],
    manager: 'Vanesa Vargas',
    phone: '0999209110',
    manager2: 'Vanesa Vargas',
    phone2: '0999209110',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  // {
  //   name: "Gobernación",
  //   address: 'San Juan de Pastocalle',
  //   location: [-0.9341901233400618, -78.61537623357765],
  //   manager: '',
  //   phone: '',
  //   manager2: '',
  //   phone2: '',
  //   schedule: 'Lunes a Viernes de 8:00 a 17:00'

  // },
]

const PlaceProvider = ({ children }) => {

  const [position, setPosition] = useState(initialPosition)

  const changeFocus = (place) => {
    setPosition(place)
  }

  return (
    <PlaceContext.Provider value={{
      position,
      changeFocus,
      places
    }}>
      {children}
    </PlaceContext.Provider>
  )
}

export { PlaceContext, PlaceProvider }
