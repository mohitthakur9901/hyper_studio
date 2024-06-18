
import Card from '../components/Card'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MovingScreen from '../components/MovingScreen'
import Video_Card from '../components/Video_Card'


function Home() {
  return (
    <div>
      <Hero />
      <div className="p-10 flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-around ">
        <img src="/src/assets/Hero_img.jpg" alt="" className='hero_img bg-cover bg-center rounded-2xl max-w-full h-auto sm:w-96' />
        <img src="/src/assets/photo1.avif" alt="" className='hero_img bg-cover bg-center rounded-2xl max-w-full h-auto sm:w-96' />
      </div>
      <MovingScreen />
      <div className="flex items-center justify-center p-16">
        <h1 className='text-6xl font-bold font-mono w-[700px] '>Explore entire user journeys with flows.</h1>

      </div>
      <Video_Card />
      <Card />
      <Footer />
    </div>
  )
}

export default Home