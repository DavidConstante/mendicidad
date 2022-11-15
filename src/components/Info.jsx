import { Fab } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';

const Info = () => {
  return (
    <div className='px-2'>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Punto recolección
      </Fab>
    </div>
  )
}

export default Info