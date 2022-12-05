import { Fab } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';
import PlaceIcon from '@mui/icons-material/Place';
import { PlaceContext } from '../contextPlaceContext';
import { useContext } from 'react';

const Info = ({ name, location }) => {

  const { changeFocus } = useContext(PlaceContext)

  return (
    <div className='px-2'>

      <button
        className='bg-gray-200 rounded-full p-2 my-2 w-48  flex  justify-center items-center'
        onClick={() => changeFocus(location)}
      >
        <PlaceIcon sx={{ mr: 1 }} />
        {name}

      </button>
    </div>
  )
}

export default Info