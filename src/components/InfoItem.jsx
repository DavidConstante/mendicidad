import icon from '../assets/whatsapp.gif'

const InfoItem = () => {
  return (
    <div className="  mx-4 mb-2  bg-slate-200  flex justify-center font-sans">
      <div className="rounded bg-grey-light p-2">
        <div className="flex justify-between py-1">
          <h3 className="font-bold">Salcedo</h3>
        </div>
        <div className="text-sm mt-2">
          <div className="bg-white p-2 rounded mt-1 border-b border-grey ">
            Calle 1 - Calle 2
          </div>

          <div className="bg-white p-2 rounded mt-1 border-b border-grey ">
            Horario de atencion: 8:00 - 18:00
          </div>

          <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-blue-300">
            <span className='font-bold' >Encargado</span>
            <div className="text-grey-darker mt-2  flex justify-between items-start">
              <div>
                <p>Celimo David Constante</p>
                <p>0961701208</p>
                <p>mail@mail.com</p>
              </div>
              <img src={icon} className="rounded-full w-1/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoItem