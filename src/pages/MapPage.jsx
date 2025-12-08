import Maps from '../components/Maps'
import Header from '../components/Header'
import 'animate.css';


const MapPage = () => {

  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <hr className='flex-shrink-0' />

      <div className='flex-1 animate__animated animate__fadeIn relative'>

        <Maps />



      </div>
    </div >
  )
}

export default MapPage