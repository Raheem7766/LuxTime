// import {assets} from '../assets/assets';
import video from '../assets/Videos/Cinematic.mp4';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400' >
        {/* Hero left side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0' >
            <div className='text-[#414141]' >
                <div className='flex items-center gap-2' >
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
                    <p className='font-medium text-sm md:text-base' >OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed' >Luxury Watches</h1>
                <div className='flex items-center gap-2' >
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]' ></p>
                </div>
            </div>
        </div>
        {/* HERO RIGHT SIDE */}
        {/* <img src={assets.hero_img} className='w-full sm:w-1/2' alt=""></img> */}
        <video className='w-full sm:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] object-cover' autoPlay loop muted playsInline >
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Hero;