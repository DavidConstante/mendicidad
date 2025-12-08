import { createContext, useState } from "react";

const PlaceContext = createContext({})

const initialPosition = [-0.67167, -78.59491]

const places = [
  {
    name: "La Libertad",
    address: 'San Juan de Pastocalle',
    location: [-0.61663, -78.62918],
    manager: 'César Iza',
    phone: '0986061179',
    manager2: 'Martha Almagro',
    phone2: '0981266289',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Romerillos",
    address: 'San Juan de Pastocalle',
    location: [-0.6286, -78.60927],
    manager: 'Javier Pila',
    phone: '0968841591',
    manager2: 'Marco Chicaiza',
    phone2: '0997199123',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "San Bartolomé",
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Olga Chicaiza',
    phone: '0980381530',
    manager2: 'America Espín',
    phone2: '0996575104',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Cuilche Miño", 
    address: 'San Juan de Pastocalle',
    location: [-0.7239, -78.61971],
    manager: 'Blanca Marisol Hidalgo Toaquiza',
    phone: '0987569899',
    manager2: 'Rafael Topanta',
    phone2: '0989023681',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },

  {
    name: "Cuilche Salas",
    address: 'San Juan de Pastocalle',
    location: [-0.72388, -78.61035],
    manager: 'Mario Toapanta',
    phone: '0981530836',
    manager2: 'Luis Caza',
    phone2: '0999001034',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },

  {
    name: "Comuna el Boliche", 
    address: 'San Juan de Pastocalle',
    location: [-0.7099878197330917, -78.60942388465583],
    manager: 'Ignacio Caza',
    phone: '0983421497',
    manager2: 'Carlos Caza',
    phone2: '0986865756',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Chasqui",
    address: 'San Juan de Pastocalle',
    location: [-0.7092960438032826, -78.59469715767207],
    manager: 'Vilma Mercedes Llano',
    phone: '0987011017',
    manager2: 'Marina Chicaiza',
    phone2: '0998353053',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Santa Rita",
    address: 'San Juan de Pastocalle',
    location: [-0.71011, -78.63355],
    manager: 'Rigoberto Quinatoa',
    phone: '0983147152',
    manager2: 'Luz Tipán',
    phone2: '0994096488',
    schedule: 'Lunes a Domingo de 8:00 a 17:00'

  },
  {
    name: "Mies",
    address: 'San Juan de Pastocalle',
    location: [-0.9455894369382848, -78.61187710055121],
    manager: 'Ana Viteri',
    phone: '0997897578',
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
