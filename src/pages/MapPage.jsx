import Maps from '../components/Maps'
import Header from '../components/Header'
import 'animate.css';


const MapPage = () => {

  return (
    <div className='h-screen overflow-hidden flex flex-col'>
      <Header />
      <hr className='flex-shrink-0' />

      <div className='flex-1 animate__animated animate__fadeIn overflow-hidden'>

        <Maps />



      </div>
    </div >
  )
}

export default MapPage