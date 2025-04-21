import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Manufacture from '../components/Manufacture'
import SliderLogos from '../components/SliderLogos'

const Home = () => {
  return (
    <div>
      <Hero />
      <SliderLogos />
      <Manufacture />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home