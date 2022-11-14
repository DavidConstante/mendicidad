import React from 'react'
import logoMiess from '../assets/logoMiess.png'
import Info from './Info'

const Header = ({ }) => {



  return (
    <div className='' >
      <img className='p-4' width={150} src={logoMiess} alt="" />
      <div>
        <Info />
      </div>
    </div>
  )
}

export default Header