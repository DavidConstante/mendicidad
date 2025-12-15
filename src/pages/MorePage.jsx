import Header from "../components/Header"
import { Footer } from "../components/Footer"

import info1 from '../assets/info/info1.png'
import info2 from '../assets/info/info2.png'
import info3 from '../assets/info/info3.png'
import info4 from '../assets/info/info4.png'
import info5 from '../assets/info/info5.png'
import info6 from '../assets/info/info6.png'
import info7 from '../assets/info/info7.png'
import info8 from '../assets/info/info8.png'
import info9 from '../assets/info/info9.png'
import info10 from '../assets/info/info10.png'
import info11 from '../assets/info/info11.png'
import info12 from '../assets/info/info12.png'
import info13 from '../assets/info/info13.png'
import info14 from '../assets/info/info14.png'

import video2 from '../assets/video2.mp4'

export const MorePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center gap-12 bg-gradient-to-r from-bg to-purple-800 text-white py-12">
        
        {/* VIDEO */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl px-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10 bg-black">
            <video
              src={video2}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
               preload="auto" 
            autoPlay
            muted
            />
          </div>
        </div>

        {/* IMÁGENES */}
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              info1, info2, info3, info4, info5, info6, info7,
              info8, info9, info10, info11, info12, info13, info14,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Info ${i + 1}`}
                loading="lazy"
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
