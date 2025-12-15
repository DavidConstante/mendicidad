import Maps from '../components/Maps'
import Header from '../components/Header'
import 'animate.css';


const MapPage = () => {

  return (
    <div className='h-screen flex flex-col overflow-hidden bg-gradient-to-br '>
      <div className='flex-shrink-0'>
        <Header />
        <hr className='border-white/20' />
      </div>

      <div className='flex-1 animate__animated animate__fadeIn overflow-hidden rounded-t-3xl shadow-2xl'>
        <Maps />
      </div>
    </div >
  )
}

export default MapPage