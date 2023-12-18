import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoMiess1 from '../assets/logo1.webp'
import logoMiess2 from '../assets/logo2.webp'

import { PlaceContext } from '../contextPlaceContext'
import Info from './Info'



const Header = ({ }) => {

  const { position, changeFocus, places } = useContext(PlaceContext)

  const [path, setPath] = useState()
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])


  return (
    <div className=' flex justify-around items-center '  >

      <div className="flex justify-around w-full">
        <NavLink to={'/'}>
          <img className=' p-4' width={150} src={logoMiess1} alt="" />
        </NavLink>

        <NavLink to={'/'}>
          <img className=' p-4' width={150} src={logoMiess2} alt="" />
        </NavLink>
      </div>

      {
        path === '/maps'
          ?
          <div className='w-4/5 flex flex-row items-center overflow-auto no-scrollbar p-2 mx-4'>
            {
              places.map(place => {
                return (<Info key={place.name} name={place.name} location={place.location} />)
              })
            }

          </div>

          : null

      }





    </div>
  )
}

export default Header