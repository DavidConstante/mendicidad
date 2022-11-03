import { useLayoutEffect, useRef, useState } from "react"
import 'leaflet/dist/leaflet.css'
import Info from "./components/Info";
import Maps from "./components/Maps"

function App() {

  const titleRef = useRef();
  const [heightTitle, setHeightTitle] = useState(0)

  useLayoutEffect(() => {
    setHeightTitle(titleRef.current.getBoundingClientRect().height)
  }, [])

  return (
    <div className="">
      <h1
        className="m-4 text-2xl text-center"
        ref={titleRef}
      >
        Puntos de recoleccion mendicidad
      </h1>
      <div className="flex">

        <div className="w-4/5">
          <Maps heightTitle={heightTitle} />
        </div>
        <Info />

      </div>
    </div>
  )
}

export default App
