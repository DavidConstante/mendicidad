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
      <hr />

      <main className="flex flex-col items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 bg-gradient-to-br from-bg via-purple-700 to-purple-900 text-white py-8 sm:py-10 md:py-14 lg:py-16">
        
        {/* VIDEO */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/60 border-2 border-white/20 bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-500">
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
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Información importante
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              info1, info2, info3, info4, info5, info6, info7,
              info8, info9, info10, info11, info12, info13, info14,
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 bg-white/5 backdrop-blur-sm border border-white/10">
                <img
                  src={img}
                  alt={`Información ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
