import { createContext, useState } from "react";

const PlaceContext = createContext({})

const initialPosition = [-0.9455356948370244, -78.61183537717544]

const places = [
  {
    name: "Pastocalle",
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
    name: "Parque Nautico Latacunga",
    address: 'Av. Rumiñahui y Santiago Zamora',
    location: [-0.937762466578477, -78.60733975756742],
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