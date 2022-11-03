import React from 'react'
import InfoItem from './InfoItem'

const Info = () => {
  return (
    <div className='flex flex-col h-96 overflow-y-auto'>
      <InfoItem />
      <InfoItem />
      <InfoItem />
      <InfoItem />
      <InfoItem />
    </div>
  )
}

export default Info