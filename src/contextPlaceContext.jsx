import { createContext, useState } from "react";

const PlaceContext = createContext({})

const initialPosition = [-0.67167, -78.59491]

const places = [
  {
    name: "La Libertad",
    address: 'San Juan de Pastocalle',
    location: [-0.6124681585458935, -78.62404538465583],
    manager: 'David Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Romerios",
    address: 'San Juan de Pastocalle',
    location: [-0.6161091587250174, -78.62863382883603],
    manager: 'David Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "San Bartolomé",
    address: 'San Juan de Pastocalle',
    location: [-0.7236229085335766, -78.61972912883606],
    manager: 'Nancy Iza',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Quielchemin",
    address: 'San Juan de Pastocalle',
    location: [-0.7236880323734628, -78.61031278465583],
    manager: 'Patricia Procel',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },


  {
    name: "Cuilche Salas",
    address: 'San Juan de Pastocalle',
    location: [-0.7237089043948572, -78.61032591349188],
    manager: 'Celimo Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },

  {
    name: "Comuna el Boliche",
    address: 'San Juan de Pastocalle',
    location: [-0.7099878197330917, -78.60942388465583],
    manager: 'David Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Chasqui",
    address: 'San Juan de Pastocalle',
    location: [-0.7092960438032826, -78.59469715767207],
    manager: 'David Constante',
    phone: '0984128768',
    schedule: 'Lunes a Viernes de 8:00 a 17:00'

  },
  {
    name: "Santa Rita",
    address: 'San Juan de Pastocalle',
    location: [-0.698582519142334, -78.58449058465584],
    manager: 'David Constante',
    phone: '0984128768',
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