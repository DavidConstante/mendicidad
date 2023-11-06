import { createContext, useState } from "react";

const PlaceContext = createContext({})

const initialPosition = [-0.67167, -78.59491]

const places = [
  {
    name: "La Libertad",
    address: 'San Juan de Pastocalle',
    location: [-0.61663, -78.62918],
    manager: 'Luis Marcelo Chinchuña',
    phone: '0980687899',
    manager2: 'Carla Figueroa',
    phone2: '0986011474',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Romerillos",
    address: 'San Juan de Pastocalle',
    location: [-0.6286, -78.60927],
    manager: 'David Cajía',
    phone: '0993951980',
    manager2: 'Amparo Iza',
    phone2: '0982893937',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "San Bartolomé",
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Whashington Chicaiza',
    phone: '0989696607',
    manager2: 'Rolando Chicaiza',
    phone2: '0959497640',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Cuilche Miño",
    address: 'San Juan de Pastocalle',
    location: [-0.7239, -78.61971],
    manager: 'Orlando Toctaguano',
    phone: '0987973939',
    manager2: 'Encargado Agua',
    phone2: '0969044373',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },


  {
    name: "Cuilche Salas",
    address: 'San Juan de Pastocalle',
    location: [-0.72388, -78.61035],
    manager: 'Esequiel Caiza',
    phone: '0969577223',
    manager2: 'Mario Toapanta',
    phone2: '0981530836',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },

  // Cambiar 
  {
    name: "Comuna el Boliche",
    address: 'San Juan de Pastocalle',
    location: [-0.7099878197330917, -78.60942388465583],
    manager: 'Mario Patricio Toapanta',
    phone: '0992998123',
    manager2: 'Roberto Toapanta',
    phone2: '0988390059',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Chasqui",
    address: 'San Juan de Pastocalle',
    location: [-0.7092960438032826, -78.59469715767207],
    manager: 'Mercedes Llano',
    phone: '0987011017',
    manager2: 'Luis Puco',
    phone2: '0995154192',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Santa Rita",
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Roberto Quinatoa',
    phone: '0983147152',
    manager2: 'Marina Puco',
    phone2: '0992657312',
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
  {
    name: "Gobernación",
    address: 'San Juan de Pastocalle',
    location: [-0.9341901233400618, -78.61537623357765],
    manager: '',
    phone: '',
    manager2: '',
    phone2: '',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
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
