import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoMiess from '../assets/logoMiess.png'
import Info from './Info'



const Header = ({ }) => {

  const [path, setPath] = useState()
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])


  return (
    <div className=' flex justify-around w-screen'  >

      <div className="w-2/5 ">
        <NavLink to={'/'}>
          <img className=' p-4' width={150} src={logoMiess} alt="" />
        </NavLink>
      </div>

      {
        path === '/maps'
          ?
          <div className='w-4/5 flex flex-row items-center overflow-auto no-scrollbar p-2 m-4'>
            <Info />
            <Info />
            <Info />
          </div>

          : null

      }





    </div>
  )
}

export default Header