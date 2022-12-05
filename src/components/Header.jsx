import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoMiess from '../assets/logoMiess.png'
import { PlaceContext } from '../contextPlaceContext'
import Info from './Info'



const Header = ({ }) => {

  const { position, changeFocus, places } = useContext(PlaceContext)

  const [path, setPath] = useState()
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])


  return (
    <div className=' flex justify-around items-center w-screen'  >

      <div className="">
        <NavLink to={'/'}>
          <img className=' p-4' width={150} src={logoMiess} alt="" />
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