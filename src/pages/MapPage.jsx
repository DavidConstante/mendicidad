import Maps from '../components/Maps'
import Header from '../components/Header'
import 'animate.css';


const MapPage = () => {

  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='flex-shrink-0'>
        <Header />
        <hr />
      </div>

      <div className='flex-1 animate__animated animate__fadeIn overflow-hidden'>
        <Maps />
      </div>
    </div >
  )
}

export default MapPage