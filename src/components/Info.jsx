import { Fab } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';
import { PlaceContext } from '../contextPlaceContext';
import { useContext } from 'react';

const Info = ({ name, location }) => {

  const { changeFocus } = useContext(PlaceContext)

  return (
    <div className='px-2'>
      <Fab
        variant="extended"
        onClick={() => changeFocus(location)}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        {name}
      </Fab>
    </div>
  )
}

export default Info